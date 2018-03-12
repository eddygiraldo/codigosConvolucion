XORApp.controller('SimulationController', function ($scope, $timeout) {

    $scope.Home = {
        Title: "Simulación",
    }

    $scope.entrada = "";
    $scope.entradaBinaria = "";
    $scope.salida = "";
    $scope.maquinaEstados = [];    


    $scope.elements = {

    }    

    $scope.elements.memoriaUno = {
        id: "memoriaUno",
        active: false,
        fill: "#99ccff",
    }

    $scope.elements.memoriaDos = {
        id: "memoriaDos",
        active: false, 
        fill: "#99ccff",
    } 

    $scope.elements.memoriaTres = {
        id: "memoriaTres",
        active: false, 
        fill: "#99ccff",
    }

    $scope.elements.xorUno = {
        id: "xorUno",
        active: false, 
        fill: "#99ccff",
    }

    $scope.elements.xorDos = {
        id: "xorDos",
        active: false, 
        fill: "#99ccff",
    }

    $scope.elements.xorTres = {
        id: "xorTres",
        active: false, 
        fill: "#99ccff",
    }

    $scope.elements.salidaUno = {
        id: "salidaUno",
        active: false, 
        fill: "#99ccff",
    }

    $scope.elements.salidaDos = {
        id: "salidaDos",
        active: false, 
        fill: "#99ccff",
    }

    $scope.elements.salidaTres = {
        id: "salidaTres",
        active: false, 
        fill: "#99ccff",
    }

    $scope.mouseClick = function (event) {          
        angular.forEach($scope.elements, function(key, value){
            if (key.id == event.target.id){
                //alert(key.id);
                if (key.active) {
                    key.active = false;
                    key.fill = "#99ccff";

                    if (key.id == "memoriaDos"){
                        $scope.elements.xorDos.active = false;
                        $scope.elements.xorDos.fill = "#99ccff";
                    }
                } else {
                    key.active = true;
                    key.fill = "green";
                }                    
            }
            
        });    

    }

    $scope.Ejecutar = function () {
        var _entrada = "0";
        $scope.entradaBinaria = "";
        var _estadoActual = "";
        var _estadoSiguiente = "";
        var _salida = "";
        
        
        // Máquina de estados
        $scope.MaquinaEstados();

        //Convertir entrada a binario     
        $scope.entradaBinaria = stringToBinary($scope.entrada, true);              

    };

    $scope.MaquinaEstados = function () {
        var _entrada = "0";
        var _estadoActual = "0";
        var _estadoSiguiente = "0";
        var _salida = "0";
        var _newCadena = "";
        
        var _numMemorias = 0;
        var _numFilas = 0;
        var _numSalidas = 0;
        var _resultParcial = "";
        var _listEstados = [];

        $scope.maquinaEstados = [];

        //maquina estados         
        if ($scope.elements.memoriaUno.active) {
            _numMemorias += 1;
        }

        if ($scope.elements.memoriaDos.active) {
            _numMemorias += 1;
        }

        if ($scope.elements.memoriaTres.active) {
            _numMemorias += 1;
        }

        _numFilas = Math.pow(2, _numMemorias);

        //Estados        
        if (_numMemorias == 1){
            _listEstados.push({id : 0, value : "0"});
            _listEstados.push({id : 1, value : "1"});
        } else if (_numMemorias == 2) {
            _listEstados.push({id : 0, value : "00"});
            _listEstados.push({id : 1, value : "01"});
            _listEstados.push({id : 2, value : "10"});
            _listEstados.push({id : 3, value : "11"});
        } else if (_numMemorias == 3) {
            _listEstados.push({id : 0, value : "000"});
            _listEstados.push({id : 1, value : "001"});
            _listEstados.push({id : 2, value : "010"});
            _listEstados.push({id : 3, value : "011"});
            _listEstados.push({id : 4, value : "100"});
            _listEstados.push({id : 5, value : "101"});
            _listEstados.push({id : 6, value : "110"});
            _listEstados.push({id : 7, value : "111"});            
        }

        // S1 = M1 XOR M3
        // S2 = M3
        // S3 = (M1 XOR M2) XOR M3

        for (var i = 0; i < _numFilas; i++) {            
            
            _estadoActual = _listEstados[i].value;
            
            //0
            _entrada = "0";
            _estadoSiguiente = "";
            _newCadena = "";
            _salida = "";

            for (var j = 0; j < _estadoActual.length; j++){
                if (j == 0){
                    _newCadena += _entrada;
                } else {
                    _newCadena += _estadoActual[j-1];
                }                
            }        
            _estadoSiguiente = _newCadena;

            //salidaUno
            if($scope.elements.salidaUno.active) {
                //xorUno?
                if($scope.elements.xorUno.active) {
                    if($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active){                        
                        _salida += _estadoActual[0] | ($scope.elements.memoriaDos.active ? _estadoActual[2] : _estadoActual[1]);
                    }
                }
            }

            //salidaDos
            if($scope.elements.salidaDos.active) {
                if($scope.elements.memoriaTres.active){                        
                    _salida += $scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active ? _estadoActual[2]: 
                    $scope.elements.memoriaUno.active &&  !$scope.elements.memoriaDos.active ? _estadoActual[1]:
                    $scope.elements.memoriaDos.active &&  !$scope.elements.memoriaUno.active ? _estadoActual[1] : _estadoActual[0];
                }                
            }

            //salidaTres
            _resultParcial = "";
            if($scope.elements.salidaTres.active) {                
                if($scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active) {
                    if($scope.elements.xorDos.active){                        
                        _resultParcial = _estadoActual[0] | _estadoActual[2];
                        if($scope.elements.memoriaTres.active && $scope.elements.xorTres.active) {
                            _salida += _resultParcial | _estadoActual[3];
                        }
                    }
                }else if ($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active) {
                    _salida += _estadoActual[0] | _estadoActual[1];
                }
            }


            $scope.maquinaEstados.push({entrada: _entrada, estadoActual: _estadoActual, estadoSiguiente: _estadoSiguiente, salida: _salida});
            //_estadoActual = _estadoSiguiente;

            //1
            _entrada = "1";
            _estadoSiguiente = "";
            _newCadena = "";
            _salida = "";

            for (var j = 0; j < _estadoActual.length; j++){
                if (j == 0){
                    _newCadena += _entrada;
                } else {
                    _newCadena += _estadoActual[j-1];
                }                
            }
            _estadoSiguiente = _newCadena; 

            //salidaUno
            if($scope.elements.salidaUno.active) {
                //xorUno?
                if($scope.elements.xorUno.active) {
                    if($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active){                        
                        _salida += _estadoActual[0] | ($scope.elements.memoriaDos.active ? _estadoActual[2] : _estadoActual[1]);
                    }
                }
            }

            //salidaDos
            if($scope.elements.salidaDos.active) {
                if($scope.elements.memoriaTres.active){                        
                    _salida += $scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active ? _estadoActual[2]: 
                    $scope.elements.memoriaUno.active &&  !$scope.elements.memoriaDos.active ? _estadoActual[1]:
                    $scope.elements.memoriaDos.active &&  !$scope.elements.memoriaUno.active ? _estadoActual[1] : _estadoActual[0];
                }                
            }

            //salidaTres
            _resultParcial = "";
            if($scope.elements.salidaTres.active) {
                if($scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active) {
                    if($scope.elements.xorDos.active){                        
                        _resultParcial = _estadoActual[0] | _estadoActual[2];
                        if($scope.elements.memoriaTres.active && $scope.elements.xorTres.active) {
                            _salida += _resultParcial | _estadoActual[3];
                        }
                    }
                } else if ($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active) {
                    _salida += _estadoActual[0] | _estadoActual[1];
                }
            }

            $scope.maquinaEstados.push({entrada: _entrada, estadoActual: _estadoActual, estadoSiguiente: _estadoSiguiente, salida: _salida});
            //_estadoActual = _estadoSiguiente;
        }
    }

    
    function stringToBinary(str, spaceSeparatedOctets) {
        function zeroPad(num) {
            return "00000000".slice(String(num).length) + num;
        }
    
        return str.replace(/[\s\S]/g, function(str) {
            str = zeroPad(str.charCodeAt().toString(2));
            return !1 == spaceSeparatedOctets ? str : str + " "
        });
    };


});

