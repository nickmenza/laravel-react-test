@extends('layouts.app')

@section('title','Printing Samples')

@section('body')
<h2>Available Samples</h2>

<table class="table table-bordered">
    <tr>
        <td><a href="{{action('DemoPrintCommandsController@index')}}" class="btn btn-large btn-info">Print Raw Commands</a></td>
        <td>In this demo you'll be able to specify the printer commands you want to send to a client printer. You must specify the commands that the target printer can handle. Common printer commands are ESC/P, PCL, ZPL, EPL, DPL, IPL, EZPL, and so on.</td>
    </tr>
    <tr>
        <td><a href="{{action('DemoPrintFileController@index')}}" class="btn btn-large btn-info">Print Files</a></td>
        <td>In this demo you'll be able to specify a file like PDF, TXT, MS Word DOC, MS Excel XLS, JPG & PNG images, multipage TIF; that you want to print to a client printer <strong>without displaying any Print dialog!</strong>.</td>
    </tr>
</table>
@endsection