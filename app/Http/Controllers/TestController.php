<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

use Mike42\Escpos\Printer;
use Mike42\Escpos\EscposImage;
use Mike42\Escpos\PrintConnectors\NetworkPrintConnector;
use Mike42\Escpos\PrintConnectors\FilePrintConnector;

class TestController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    function test(){

        $connector = new NetworkPrintConnector("192.168.1.102", 9100);
        $printer = new Printer($connector);
        $printer -> text("Hello World!\n");
        $printer -> text("Hello Nick \n\n");
        try {

        } finally {
             $printer -> feed();
            $printer -> cut();
            $printer -> close();
        }
        
        return "test";
    }

    function test_print(){
        $connector = new NetworkPrintConnector("192.168.1.102", 9100);
        
        $printer = new Printer($connector);
        // size paper
        $printer ->setPrintWidth(399);
        try {
            $text_row_size = 33;
            $text_size_left = 29;
            $text1 = "food1";
            $text2 = "food_test";
            
            $printer -> text(str_pad($text1,$text_size_left," ",STR_PAD_RIGHT).str_pad("3",$text_row_size-$text_size_left," ",STR_PAD_LEFT)."\n");
            $printer -> text(str_pad($text2,$text_size_left," ",STR_PAD_RIGHT).str_pad("30",$text_row_size-$text_size_left," ",STR_PAD_LEFT)."\n");
            $printer ->feed(1);
            $printer -> setJustification(Printer::JUSTIFY_CENTER);
            $printer -> setBarcodeHeight(50);
            $printer -> setBarcodeWidth(2);
            $printer->setBarcodeTextPosition(Printer::BARCODE_TEXT_BELOW);
            // barcode 11 ตัว
            $printer -> barcode("17060100000");
            $printer -> setJustification();
            $printer ->feed(2);
            $printer -> cut();
          
        } finally {
            /* Always close the printer! */
            $printer -> close();
        }
        
    }
}
