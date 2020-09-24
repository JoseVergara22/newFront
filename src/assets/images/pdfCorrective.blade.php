
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/pdfPreventive.css">
    <title>Matenimiento Correctivo</title>
</head>
<body>
    
    
    
<table class="table">
    <tr class="higher">
        <td class="image">
        <img src="./images/logo_menu2.png" width="180px">
        </td>
        <td colspan="2">
            <p><strong>
                 Soluciones integrales para el
                movimiento interno de sus mercancías
            </strong>
            </p>
        </td>
        <td colspan="2">
            <strong> Manteminiento Correctivo </strong>
        </td>  
        <td colspan="2">
            Nro: {{$routine->routine->checklists_consecutive}}
        </td>
    </tr>
    <tr class="higher" >
        <td colspan="1">Cliente:  {{$routine->routine->business_name}}</td>
        <td colspan="2">Sede: {{$routine->routine->branch_name}}</td>
        <td colspan="2"> Equipo: {{$routine->routine->forklif}}</td>
        <td colspan="2">Horometro:  {{$routine->routine->h_current}}</td>
    </tr>
    <tr class="higher">
        <td>Marca: {{$routine->routine->brand}}</td>
        <td> Modelo: {{$routine->routine->model}}</td>
        <td colspan="2">Serie: {{$routine->routine->serie}}</td>
        <td colspan="3"> Fecha de Finalización: {{$routine->routine->finish}} </td>
     </tr>
     @foreach ($routine->technician as $item)
        <tr class="higher" >
            <td colspan="2">Nombre Tecnico: {{$item->name}}</td>
            <td colspan="5"></td>
        </tr>
     @endforeach

     <tr class="higher">
        <td colspan="7">
            <strong> Manteminiento Correctivo:<br> {{$routine->routine->work}} </strong>
        </td>
     </tr>
    
    <tr class="higher">
        <td ><strong>
            Sistema
        </td>
        
        <td colspan="3"><strong>
            <p>Descripción</p>  
        </td>
        <td colspan="3">
             <strong>
                 <p>Diagnostico</p>
        </td>        
    </tr>
    
    @foreach ($routine->routine->make_correctiveroutine as $item)
        <tr>

            <td >{{$item->maintenance_systems_description}}</td>
            <td colspan="3">{{$item->fault_description}}</td>
            <td colspan="3">{{$item->diagnostic}}</td>

        </tr>        
    @endforeach


@if (count($routine->routine->corrective_supplice)>=1)
    <tr class="higher" style="text-align: left">
        <td colspan="7" ><strong>INSUMOS REPUESTOS INSTALADOS</td>
    </tr>
    <tr class="higher">
        <td >
            <strong>
                Cantidad
        </td>
        <td colspan="6"><strong>
            Descripción
        </td> 
        {{-- <td colspan="5"></td>      --}}
    </tr>    
        
    @foreach ($routine->routine->corrective_supplice as $item)
    <tr>
        <td>{{$item->quantity}}</td>          
        <td colspan="6">{{$item->description}}</td>
        {{-- <td colspan="5"></td> --}}
        
    </tr>        
    @endforeach
@endif

@if (count($routine->routine->corrective_pending)>=1)

    <tr class="higher" style="text-align: left">
        <td colspan="7"><strong>PENDIENTES</td>
    </tr>
    <tr class="higher">
        <td colspan="7"><strong>
            Descripción
        </td> 
        {{-- <td colspan="4"></td>      --}}
    </tr>
    @foreach ($routine->routine->corrective_pending as $item)
        <tr>        
            <td colspan="7">{{$item->description}}</td>
            {{-- <td colspan="4"></td> --}}

        </tr>        
    @endforeach
        
@endif

@if (count($routine->delivery)>=1)
    

    <tr class="higher" style="text-align: left">
        <td colspan="7"><strong>ESPACIO DE ASEO</td>
    </tr>
    <tr class="higher">
       
        <td><strong>
            Item
        </td> 
        <td colspan="6"><strong>
            Observación
        </td> 
        {{-- <td colspan="5"></td>      --}}
    </tr>
    @foreach ($routine->delivery as $item)
        <tr>
              
            <td>{{$item->delivery_review}}</td>          
            <td colspan="6">{{$item->observation}}</td>          
            {{-- <td colspan="5"></td>       --}}
        </tr>  
    @endforeach
@endif
</table>

@if (count($routine->routine->corrective_images))
        
    <label>IMAGENES</label>
        <br>
        <br>
        <br>
        @foreach ($routine->routine->corrective_images as $item)
            <img src="{{$item->image}}" width="20%" HSPACE="10" VSPACE="10" style="border-image: auto;">     
        @endforeach
        <br>
        
@endif
<label>FIRMA</label>
    <br>
    <br>
    @foreach ($routine->routine->corrective_firm as $item)
        <img src="{{$item->firm}}" width="20%" HSPACE="10" VSPACE="10" style="border-image: auto;">     
        <br>
         <h4 style="text-decoration: underline">{{$item->name}}</h4> <
    @endforeach

</body>
</html>