@extends('fontend.layouts.layout-main')
@section('header')
  @include('fontend.include.header')
@endsection
@section('content')
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown link
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item active" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>

<div id="example"></div>
@endsection

@section('footer')
  @include('fontend.include.footer')
@endsection