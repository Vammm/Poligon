<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    

    <title>FormsBoot</title>
    @vite('resources/css/app.css')
</head>
    <body>
        @include('head')
        <br>
        Root HTML
            <div >


                
                @yield('menu')
                @yield('login')
                @yield('recovery')
                @yield('content2')
            </div>
        @include('footer')
    </body>
@vite('resources/js/app.js')
</html>