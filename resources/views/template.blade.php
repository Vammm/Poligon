<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ًPoligon</title>
    @vite('resources/css/app.css')
</head>
<body>

<!-- @include('menu')
@include('test') -->

@yield('login')
@yield('menu')
@yield('sign_up')

    <!-- Footer -->
</section>
</body>

@vite('resources/js/app.js')
</html>
