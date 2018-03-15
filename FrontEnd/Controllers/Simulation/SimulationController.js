XORApp.controller('SimulationController', function ($scope, $timeout) {

    $scope.Home = {
        Title: "Simulación",
    }

    $scope.entrada = "";
    $scope.entradaBinaria = "";
    $scope.salida = "";
    $scope.maquinaEstados = [];

    $scope.numberElements = [
        { id: "1", name: "Uno" },
        { id: "2", name: "Dos" },
        { id: "3", name: "Tres" }
    ]

    $scope.memorias = [
        { id: "entrada", name: "Entrada" }
    ];

    $scope.xors = [];

    $scope.ocultarS1 = true;
    $scope.ocultarS2 = true;
    $scope.ocultarS3 = true;

    $scope.elements = {};

    $scope.elements.memoriaUno = {
        id: "memoriaUno",
        active: false,
        fill: "white",
    }

    $scope.elements.memoriaDos = {
        id: "memoriaDos",
        active: false,
        fill: "white",
    }

    $scope.elements.memoriaTres = {
        id: "memoriaTres",
        active: false,
        fill: "white",
    }

    $scope.elements.xorUno = {
        id: "xorUno",
        active: false,
        fill: "white",
    }

    $scope.elements.xorDos = {
        id: "xorDos",
        active: false,
        fill: "white",
    }

    $scope.elements.xorTres = {
        id: "xorTres",
        active: false,
        fill: "white",
    }

    $scope.elements.salidaUno = {
        id: "salidaUno",
        active: false,
        fill: "white",
    }

    $scope.elements.salidaDos = {
        id: "salidaDos",
        active: false,
        fill: "white",
    }

    $scope.elements.salidaTres = {
        id: "salidaTres",
        active: false,
        fill: "white",
    }

    $scope.selectNumeroMemorias = function () {
        $scope.memorias = [
            { id: "entrada", name: "Entrada" }
        ];
        switch ($scope.nMemorias) {
            case "1":
                $scope.memorias.push({ id: "memoriaUno", name: "Memoria Uno" });

                $scope.elements.memoriaUno.active = true;
                $scope.elements.memoriaUno.fill = "green";

                $scope.elements.memoriaDos.active = false;
                $scope.elements.memoriaDos.fill = "white";

                $scope.elements.memoriaTres.active = false;
                $scope.elements.memoriaTres.fill = "white";
                break;
            case "2":
                $scope.memorias.push({ id: "memoriaUno", name: "Memoria Uno" });
                $scope.memorias.push({ id: "memoriaDos", name: "Memoria Dos" });

                $scope.elements.memoriaUno.active = true;
                $scope.elements.memoriaUno.fill = "green";

                $scope.elements.memoriaDos.active = true;
                $scope.elements.memoriaDos.fill = "green";

                $scope.elements.memoriaTres.active = false;
                $scope.elements.memoriaTres.fill = "white";
                break;
            case "3":
                $scope.memorias.push({ id: "memoriaUno", name: "Memoria Uno" });
                $scope.memorias.push({ id: "memoriaDos", name: "Memoria Dos" });
                $scope.memorias.push({ id: "memoriaTres", name: "Memoria Tres" });

                $scope.elements.memoriaUno.active = true;
                $scope.elements.memoriaUno.fill = "green";

                $scope.elements.memoriaDos.active = true;
                $scope.elements.memoriaDos.fill = "green";

                $scope.elements.memoriaTres.active = true;
                $scope.elements.memoriaTres.fill = "green";
                break;
            default:
                break;
        }
    }

    $scope.selectNumeroXor = function () {
        $scope.xors = [];
        switch ($scope.nXor) {
            case "1":
                $scope.xors.push({ id: "xorUno", name: "XOR Uno" });

                $scope.elements.xorUno.active = true;
                $scope.elements.xorUno.fill = "green";

                $scope.elements.xorDos.active = false;
                $scope.elements.xorDos.fill = "white";

                $scope.elements.xorTres.active = false;
                $scope.elements.xorTres.fill = "white";
                break;
            case "2":
                $scope.xors.push({ id: "xorUno", name: "XOR Uno" });
                $scope.xors.push({ id: "xorDos", name: "XOR Dos" });

                $scope.elements.xorUno.active = true;
                $scope.elements.xorUno.fill = "green";

                $scope.elements.xorDos.active = true;
                $scope.elements.xorDos.fill = "green";

                $scope.elements.xorTres.active = false;
                $scope.elements.xorTres.fill = "white";
                break;
            case "3":
                $scope.xors.push({ id: "xorUno", name: "XOR Uno" });
                $scope.xors.push({ id: "xorDos", name: "XOR Dos" });
                $scope.xors.push({ id: "xorTres", name: "XOR Tres" });

                $scope.elements.xorUno.active = true;
                $scope.elements.xorUno.fill = "green";

                $scope.elements.xorDos.active = true;
                $scope.elements.xorDos.fill = "green";

                $scope.elements.xorTres.active = true;
                $scope.elements.xorTres.fill = "green";
                break;
            default:
                break;
        }
    }

    $scope.selectNumeroSalidas = function () {
        switch ($scope.nSalidas) {
            case "1":
                $scope.ocultarS1 = false;
                $scope.ocultarS2 = true;
                $scope.ocultarS3 = true;

                $scope.elements.salidaUno.active = true;
                $scope.elements.salidaUno.fill = "green";

                $scope.elements.salidaDos.active = false;
                $scope.elements.salidaDos.fill = "white";

                $scope.elements.salidaTres.active = false;
                $scope.elements.salidaTres.fill = "white";
                break;
            case "2":
                $scope.ocultarS1 = false;
                $scope.ocultarS2 = false;
                $scope.ocultarS3 = true;

                $scope.elements.salidaUno.active = true;
                $scope.elements.salidaUno.fill = "green";

                $scope.elements.salidaDos.active = true;
                $scope.elements.salidaDos.fill = "green";

                $scope.elements.salidaTres.active = false;
                $scope.elements.salidaTres.fill = "white";
                break;
            case "3":
                $scope.ocultarS1 = false;
                $scope.ocultarS2 = false;
                $scope.ocultarS3 = false;

                $scope.elements.salidaUno.active = true;
                $scope.elements.salidaUno.fill = "green";

                $scope.elements.salidaDos.active = true;
                $scope.elements.salidaDos.fill = "green";

                $scope.elements.salidaTres.active = true;
                $scope.elements.salidaTres.fill = "green";
                break;
            default:
                break;
        }


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
        var _entradaSinEspacios = $scope.entradaBinaria.replace(/\s/g, '')
        //Codificar Salida
        for (i = 0; i < _entradaSinEspacios.length; i++) {
            if (i == 0) {
                _estadoActual = $scope.maquinaEstados[0].estadoActual;
            } else {
                _estadoActual = $scope.maquinaEstados.filter(e => e.estadoActual == _estadoSiguiente && e.entrada == _entrada).map(e => e.estadoActual);
            }
            _entrada = $scope.entradaBinaria[i];
            _salida += $scope.maquinaEstados.filter(e => e.estadoActual == _estadoActual && e.entrada == _entrada).map(e => e.salida);
            _estadoSiguiente = $scope.maquinaEstados.filter(e => e.estadoActual == _estadoActual && e.entrada == _entrada).map(e => e.estadoSiguiente);

        }

        $scope.salida = _salida;

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
        if (_numMemorias == 1) {
            _listEstados.push({ id: 0, value: "0" });
            _listEstados.push({ id: 1, value: "1" });
        } else if (_numMemorias == 2) {
            _listEstados.push({ id: 0, value: "00" });
            _listEstados.push({ id: 1, value: "01" });
            _listEstados.push({ id: 2, value: "10" });
            _listEstados.push({ id: 3, value: "11" });
        } else if (_numMemorias == 3) {
            _listEstados.push({ id: 0, value: "000" });
            _listEstados.push({ id: 1, value: "001" });
            _listEstados.push({ id: 2, value: "010" });
            _listEstados.push({ id: 3, value: "011" });
            _listEstados.push({ id: 4, value: "100" });
            _listEstados.push({ id: 5, value: "101" });
            _listEstados.push({ id: 6, value: "110" });
            _listEstados.push({ id: 7, value: "111" });
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

            for (var j = 0; j < _estadoActual.length; j++) {
                if (j == 0) {
                    _newCadena += _entrada;
                } else {
                    _newCadena += _estadoActual[j - 1];
                }
            }
            _estadoSiguiente = _newCadena;

            //salidaUno
            if ($scope.elements.salidaUno.active) {
                //xorUno?
                if ($scope.elements.xorUno.active) {
                    if ($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active) {
                        _salida += _estadoActual[0] | ($scope.elements.memoriaDos.active ? _estadoActual[2] : _estadoActual[1]);
                    }
                }
            }

            //salidaDos
            if ($scope.elements.salidaDos.active) {
                if ($scope.elements.memoriaTres.active) {
                    _salida += $scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active ? _estadoActual[2] :
                        $scope.elements.memoriaUno.active && !$scope.elements.memoriaDos.active ? _estadoActual[1] :
                            $scope.elements.memoriaDos.active && !$scope.elements.memoriaUno.active ? _estadoActual[1] : _estadoActual[0];
                }
            }

            //salidaTres
            _resultParcial = "";
            if ($scope.elements.salidaTres.active) {
                if ($scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active) {
                    if ($scope.elements.xorDos.active) {
                        _resultParcial = _estadoActual[0] | _estadoActual[2];
                        if ($scope.elements.memoriaTres.active && $scope.elements.xorTres.active) {
                            _salida += _resultParcial | _estadoActual[3];
                        }
                    }
                } else if ($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active) {
                    _salida += _estadoActual[0] | _estadoActual[1];
                }
            }


            $scope.maquinaEstados.push({ entrada: _entrada, estadoActual: _estadoActual, estadoSiguiente: _estadoSiguiente, salida: _salida });
            //_estadoActual = _estadoSiguiente;

            //-------------------------------UNO-----------------------------//
            //1
            _entrada = "1";
            _estadoSiguiente = "";
            _newCadena = "";
            _salida = "";

            for (var j = 0; j < _estadoActual.length; j++) {
                if (j == 0) {
                    _newCadena += _entrada;
                } else {
                    _newCadena += _estadoActual[j - 1];
                }
            }
            _estadoSiguiente = _newCadena;

            //salidaUno
            if ($scope.elements.salidaUno.active) {
                //xorUno?
                if ($scope.elements.xorUno.active) {
                    if ($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active) {
                        _salida += _estadoActual[0] | ($scope.elements.memoriaDos.active ? _estadoActual[2] : _estadoActual[1]);
                    }
                }
            }

            //salidaDos
            if ($scope.elements.salidaDos.active) {
                if ($scope.elements.memoriaTres.active) {
                    _salida += $scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active ? _estadoActual[2] :
                        $scope.elements.memoriaUno.active && !$scope.elements.memoriaDos.active ? _estadoActual[1] :
                            $scope.elements.memoriaDos.active && !$scope.elements.memoriaUno.active ? _estadoActual[1] : _estadoActual[0];
                }
            }

            //salidaTres
            _resultParcial = "";
            if ($scope.elements.salidaTres.active) {
                if ($scope.elements.memoriaUno.active && $scope.elements.memoriaDos.active) {
                    if ($scope.elements.xorDos.active) {
                        _resultParcial = _estadoActual[0] | _estadoActual[2];
                        if ($scope.elements.memoriaTres.active && $scope.elements.xorTres.active) {
                            _salida += _resultParcial | _estadoActual[3];
                        }
                    }
                } else if ($scope.elements.memoriaUno.active && $scope.elements.memoriaTres.active) {
                    _salida += _estadoActual[0] | _estadoActual[1];
                }
            }

            $scope.maquinaEstados.push({ entrada: _entrada, estadoActual: _estadoActual, estadoSiguiente: _estadoSiguiente, salida: _salida });
            //_estadoActual = _estadoSiguiente;
        }
    }


    function stringToBinary(str, spaceSeparatedOctets) {
        function zeroPad(num) {
            return "00000000".slice(String(num).length) + num;
        }

        return str.replace(/[\s\S]/g, function (str) {
            str = zeroPad(str.charCodeAt().toString(2));
            return !1 == spaceSeparatedOctets ? str : str + " "
        });
    };


});

