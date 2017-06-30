<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
         <!--boostrap 4 -->
        <link href='/global/bootstrap-4/dist/css/bootstrap.min.css' rel='stylesheet' />
        <!--calendar-->
        <link href='/global/fullcalendar/fullcalendar.min.css' rel='stylesheet' />
        <link href='/global/fullcalendar/fullcalendar.print.min.css' rel='stylesheet' media='print' />
        <!---->
        <link href='/css/app.css' rel='stylesheet' />

        
        <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>
    </script>
    </head>
    <body>
        @yield('header')
        <div class="container">
             @yield('content')
        </div>
        @yield('footer')
    
        <script src='/global/jquery/jquery-3.2.1.min.js'></script>
        <script src='/global/fullcalendar/lib/moment.min.js'></script>
        
        <script src='/global/fullcalendar/fullcalendar.js'></script>
        
       
        <script src='/global/tether/tether.min.js'></script>
        <script src='/global/bootstrap-4/dist/js/bootstrap.min.js'></script>
        <script src="/js/app.js"></script>
        
        
    </body>
</html>
