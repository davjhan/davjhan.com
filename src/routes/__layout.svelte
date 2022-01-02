<script>
    import { Navbar } from 'davjhan-core'
    import 'ham-ui/dist/css/ham.css'
</script>
<div class='container mx-auto max-w-screen-md pb-48 md:border-l border-r box-content border-gray-100'>
    <Navbar/>
    <slot/>
</div>
<div class='bg-gray-50 h-36 border-t border-gray-light flex flex-col items-center justify-center'>
    <span class='text-gray-dark'>© David Han, 2021</span>
</div>