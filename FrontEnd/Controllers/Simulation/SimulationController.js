XORApp.controller('SimulationController', function ($scope, $timeout) {

    $scope.Home = {
        Title: "Simulación",
    }

    $scope.entrada = "";
    $scope.entradaBinaria = "";
    $scope.salida = "";
    $scope.maquinaEstados = [];
    $scope.listEstados = [];
    $scope.diagramaEstados = [];
    $scope.secuenciaEstados = [];
    $scope.viterbi = [];
    $scope.headerViterbi = [];

    $scope.caminos = [];   
    $scope.mensajeOriginal = []; 

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
    $scope.ocultarMaquinaEstados = true;
    $scope.ocultarDiagramaEstados = true;
    $scope.ocultarSecuenciaEstados = true;
    $scope.ocultarCorreccionErrores = true;

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
        $scope.entradaBinaria = $scope.entrada != "" ? "" : $scope.entradaBinaria;
        var _estadoActual = "";
        var _estadoSiguiente = "";
        var _salida = "";
        var _entradaSinEspacios = "";
        $scope.secuenciaEstados = [];


        // Máquina de estados
        $scope.MaquinaEstados();
        $scope.ocultarMaquinaEstados = false;

        //Convertir entrada a binario     
        $scope.entradaBinaria = $scope.entrada != "" ? stringToBinary($scope.entrada, true) : $scope.entradaBinaria;
        $scope.entradaBinaria = $scope.entradaBinaria.concat($scope.nMemorias != undefined ? $scope.nMemorias == 1 ? "0" : $scope.nMemorias == 2 ? "00" : $scope.nMemorias == 3 ? "000" : "" : "");
        _entradaSinEspacios = $scope.entradaBinaria.replace(" ", "+");


        //Codificar Salida
        for (i = 0; i < _entradaSinEspacios.length; i++) {
            _entrada = $scope.entradaBinaria[i];
            if (_entrada != " " && _entrada != "") {
                if (i == 0) {
                    _estadoActual = $scope.maquinaEstados[0].estadoActual;
                } else {
                    _estadoActual = $scope.maquinaEstados.filter(e => e.estadoActual == _estadoSiguiente && e.entrada == _entrada).map(e => e.estadoActual);
                }

                _salida += $scope.maquinaEstados.filter(e => e.estadoActual == _estadoActual && e.entrada == _entrada).map(e => e.salida);
                _estadoSiguiente = $scope.maquinaEstados.filter(e => e.estadoActual == _estadoActual && e.entrada == _entrada).map(e => e.estadoSiguiente);
                $scope.secuenciaEstados.push($scope.listEstados.filter(e => e.value == _estadoSiguiente));
            }
        }

        $scope.salida = _salida;

        $scope.ocultarSecuenciaEstados = false;

    };

    $scope.MaquinaEstados = function () {
        var _entrada = "0";
        var _estadoActual = "0";
        var _estadoSiguiente = "0";
        var _salida = "0";
        var _newCadena = "";

        var _numMemorias = $scope.nMemorias;
        var _numFilas = 0;
        var _resultParcial = "";
        $scope.listEstados = [];
        $scope.diagramaEstados = [];
        var _listEntradas = [
            "0", "1"
        ];

        $scope.maquinaEstados = [];

        //maquina estados         
        _numFilas = Math.pow(2, $scope.nMemorias);

        //Estados        
        if (_numMemorias == 1) {
            $scope.listEstados.push({ id: 0, value: "0", name: "S0", acum: 0 });
            $scope.listEstados.push({ id: 1, value: "1", name: "S1", acum: 0 });
        } else if (_numMemorias == 2) {
            $scope.listEstados.push({ id: 0, value: "00", name: "S0", acum: 0 });
            $scope.listEstados.push({ id: 1, value: "01", name: "S1", acum: 0 });
            $scope.listEstados.push({ id: 2, value: "10", name: "S2", acum: 0 });
            $scope.listEstados.push({ id: 3, value: "11", name: "S3", acum: 0 });
        } else if (_numMemorias == 3) {
            $scope.listEstados.push({ id: 0, value: "000", name: "S0", acum: 0 });
            $scope.listEstados.push({ id: 1, value: "001", name: "S1", acum: 0 });
            $scope.listEstados.push({ id: 2, value: "010", name: "S2", acum: 0 });
            $scope.listEstados.push({ id: 3, value: "011", name: "S3", acum: 0 });
            $scope.listEstados.push({ id: 4, value: "100", name: "S4", acum: 0 });
            $scope.listEstados.push({ id: 5, value: "101", name: "S5", acum: 0 });
            $scope.listEstados.push({ id: 6, value: "110", name: "S6", acum: 0 });
            $scope.listEstados.push({ id: 7, value: "111", name: "S7", acum: 0 });
        }
        $scope.ocultarDiagramaEstados = false;
        // S1 = M1 XOR M3
        // S2 = M3
        // S3 = (M1 XOR M2) XOR M3
        for (var i = 0; i < _numFilas; i++) {

            _estadoActual = $scope.listEstados[i].value;

            for (var k = 0; k < _listEntradas.length; k++) {

                _entrada = _listEntradas[k];
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
                _resultParcial = "";
                if ($scope.elements.salidaUno.active) {
                    if ($scope.e1SalidaUno != undefined) {
                        _resultParcial = getInputValue($scope.e1SalidaUno, _estadoActual, _entrada);
                    }

                    if ($scope.e2SalidaUno != undefined) {
                        if ($scope.e3SalidaUno != undefined) {
                            _resultParcial = (_resultParcial != getInputValue($scope.e3SalidaUno, _estadoActual, _entrada)) ? "1" : "0";
                        }
                    }

                    if ($scope.e4SalidaUno != undefined) {
                        if ($scope.e5SalidaUno != undefined) {
                            _resultParcial = (_resultParcial.toString() != getInputValue($scope.e5SalidaUno, _estadoActual, _entrada)) ? "1" : "0";
                        }
                    }
                    _salida += _resultParcial;
                }

                //salidaDos
                _resultParcial = "";
                if ($scope.elements.salidaDos.active) {
                    if ($scope.e1SalidaDos != undefined) {
                        _resultParcial = getInputValue($scope.e1SalidaDos, _estadoActual, _entrada);
                    }

                    if ($scope.e2SalidaDos != undefined) {
                        if ($scope.e3SalidaDos != undefined) {
                            _resultParcial = (_resultParcial != getInputValue($scope.e3SalidaDos, _estadoActual, _entrada)) ? "1" : "0";
                        }
                    }

                    if ($scope.e4SalidaDos != undefined) {
                        if ($scope.e5SalidaDos != undefined) {
                            _resultParcial = (_resultParcial != getInputValue($scope.e5SalidaDos, _estadoActual, _entrada)) ? "1" : "0";
                        }
                    }
                    _salida += _resultParcial;
                }

                //salidaTres
                _resultParcial = "";
                if ($scope.elements.salidaTres.active) {
                    if ($scope.e1SalidaTres != undefined) {
                        _resultParcial = getInputValue($scope.e1SalidaTres, _estadoActual, _entrada);
                    }

                    if ($scope.e2SalidaTres != undefined) {
                        if ($scope.e3SalidaTres != undefined) {
                            _resultParcial = (_resultParcial != getInputValue($scope.e3SalidaTres, _estadoActual, _entrada)) ? "1" : "0";
                        }
                    }

                    if ($scope.e4SalidaTres != undefined) {
                        if ($scope.e5SalidaTres != undefined) {
                            _resultParcial = (_resultParcial != getInputValue($scope.e5SalidaTres, _estadoActual, _entrada)) ? "1" : "0";
                        }
                    }
                    _salida += _resultParcial;
                }

                $scope.diagramaEstados.push({ entrada: _entrada, salida: _salida, actual: $scope.listEstados.filter(e => e.value == _estadoActual).map(e => e.name)[0], siguiente: $scope.listEstados.filter(e => e.value == _estadoSiguiente).map(e => e.name)[0] });
                $scope.maquinaEstados.push({ entrada: _entrada, estadoActual: _estadoActual, estadoSiguiente: _estadoSiguiente, salida: _salida });
                //_estadoActual = _estadoSiguiente;                
            }
        }
    };

    $scope.Corregir = function () {
        $scope.ocultarCorreccionErrores = false;


        var i = 0;
        var _id = "";
        var _idSiguiente = "";
        var _nSalidas = parseInt($scope.nSalidas);
        var _elementoSalida = "";
        // var _estadoActual = "S0";
        var _entrada = "";
        var _salidaDiagrama = "";
        var _distanciaHamming = 0;
        var _pesoTotal = 0;
        var _numMemorias = $scope.nMemorias;
        var _estadoSiguiente = "";

        $scope.headerViterbi = [];
        $scope.viterbi = [];
        var _listEntradas = [
            "0", "1"
        ];
        var _estadosActuales = [
            "S0"
        ]

        //Inicializar acumuladores
        $scope.listEstados.forEach(function (estado) {
            estado.acum = 0;
        });
        var j = 0;
        while (i < ($scope.salida.length / _nSalidas)) {
            _elementoSalida = $scope.salida.substring(j, j + _nSalidas);

            //Acumular los estados
            _estadosActuales.forEach(function (estadoActual) {
                //Acumula un paso por el estado correspondiente                
                $scope.listEstados[$scope.listEstados.filter(e => e.name == estadoActual).map(e => e.id)[0]].acum += 1;
            });//End ForEach

            //Iterar los estados a evaluar
            _estadosActuales.forEach(function (estadoActual) {
                //ID
                _id = $scope.listEstados.filter(e => e.name == estadoActual).map(e => e.id)[0].toString();
                //$scope.listEstados[_id].acum += 1;
                _id = _id.concat($scope.listEstados[_id].acum - 1);

                if (i == (($scope.salida.length / _nSalidas) - 1)) {
                    $scope.viterbi.push
                        (
                        {
                            idAux: i,
                            id: _id,
                            estado: estadoActual,
                            elementoSalidaCodificado: _elementoSalida,
                            entrada: null,
                            salida: null,
                            peso: 0,
                            pesoTotal: _pesoTotal,
                            siguiente: null,
                            idSiguiente: null,
                        }
                        );
                }
                else {
                    for (var k = 0; k < _listEntradas.length; k++) {
                        _entrada = _listEntradas[k];

                        _salidaDiagrama = $scope.diagramaEstados.filter(e => e.actual == estadoActual && e.entrada == _entrada).map(e => e.salida)[0];
                        _estadoSiguiente = $scope.diagramaEstados.filter(e => e.actual == estadoActual && e.entrada == _entrada).map(e => e.siguiente)[0];

                        _distanciaHamming = getHammingDistance(_elementoSalida, _salidaDiagrama);

                        //ID Siguiente
                        _idSiguiente = $scope.listEstados.filter(e => e.name == _estadoSiguiente).map(e => e.id)[0].toString();
                        _idSiguiente = _idSiguiente.concat($scope.listEstados[_idSiguiente].acum);

                        //Adicionar elemento al diagrama de viterby 
                        $scope.viterbi.push
                            (
                            {
                                idAux: i,
                                id: _id,
                                estado: estadoActual,
                                elementoSalidaCodificado: _elementoSalida,
                                entrada: _entrada,
                                salida: _salidaDiagrama,
                                peso: _distanciaHamming,
                                pesoTotal: i == 0 ? _distanciaHamming : _pesoTotal,
                                siguiente: _estadoSiguiente,
                                idSiguiente: _idSiguiente,
                            }
                            );

                    }//End For
                }


            });//End ForEach

            //Eliminar nodos de mayor peso y sumar pesos del nodo
            if (i > 0) {
                var nodoEliminar;
                $scope.viterbi.filter(e => e.idAux == i).forEach(function (nodo) {
                    var nodosDependientes = $scope.viterbi.filter(e => e.idAux == (i - 1) && e.idSiguiente == nodo.id);

                    //Eliminar mayor peso
                    if (nodosDependientes.length > 1) {
                        //Sumar pesos
                        nodo.pesoTotal = nodo.peso + (nodosDependientes[0].pesoTotal > nodosDependientes[1].pesoTotal ? nodosDependientes[1].pesoTotal : nodosDependientes[0].pesoTotal);
                        if (nodosDependientes[0].pesoTotal != nodosDependientes[1].pesoTotal) {
                            nodoEliminar = nodosDependientes[0].pesoTotal > nodosDependientes[1].pesoTotal ? nodosDependientes[0] : nodosDependientes[1];
                            $scope.viterbi = $scope.viterbi.filter(e => e != nodoEliminar);
                        }
                    }
                    else {
                        //Sumar pesos
                        nodo.pesoTotal = nodo.peso + (nodosDependientes.length > 0 ? nodosDependientes[0].pesoTotal : 0);
                    }

                });
            }

            if (i < ($scope.salida.length / _nSalidas) - 2) {
                //Obtener los siguientes estados
                _estadosActuales = $scope.viterbi.filter(e => e.idAux == i).map(e => e.siguiente);
                //Eliminar repetidos
                _estadosActuales = _estadosActuales.filter(function (elem, index, self) {
                    return index === self.indexOf(elem);
                })
            }


            $scope.headerViterbi.push({ val: _elementoSalida });
            _elementoSalida = "";
            i += 1;
            j += _nSalidas;
        }//End While

        hallarCaminosMenorPeso();
    }

    //Hallar los caminos de menor peso para graficar
    function hallarCaminosMenorPeso() {
        var _numEstados = $scope.listEstados.length - 1;
        var _nSalidas = parseInt($scope.nSalidas);
        var _menorPeso = 100;
        var max = ($scope.salida.length / _nSalidas) - 1;

        $scope.caminos = [];
        $scope.mensajeOriginal = [];

        //Hallar menor peso
        $scope.viterbi.filter(e => e.idAux == max).forEach(function (nodo) {
            _menorPeso = nodo.pesoTotal < _menorPeso ? nodo.pesoTotal : _menorPeso;
        });
        
        $scope.viterbi.filter(e => e.idAux == max && e.pesoTotal == _menorPeso).forEach(function (nodo) {
            var i = max;
            var _data = [];
            var nodoDependiente = [];
            nodoDependiente.push(nodo);           

            while (i >= 0) {                
                _data.push(nodoDependiente[0].id.substring(0, 1));
                nodoDependiente = $scope.viterbi.filter(e => e.idAux == (i - 1) && e.idSiguiente == nodoDependiente[0].id);
                console.log(i);
                i -= 1;
            }

            //Adicionar camino
            $scope.caminos.push({
                label: 'Camino',
                data: _data.reverse(),
                borderColor: "rgb(75, 192, 192)",
                pointBackgroundColor: "rgb(75, 192, 192)",
                fill: "origin",
            });
        });
        
        //Camino menor peso
        $scope.viterbi.filter(e => e.idAux == max && e.pesoTotal == _menorPeso).forEach(function (nodo) {
            var i = max;
            $scope.mensajeOriginal = [];            
            var nodoDependiente = [];
            nodoDependiente.push(nodo);

            while (i >= 0) {                
                $scope.mensajeOriginal.push(nodoDependiente[0].entrada);
                nodoDependiente = $scope.viterbi.filter(e => e.idAux == (i - 1) && e.idSiguiente == nodoDependiente[0].id);
                console.log(i);
                i -= 1;
            }

            $scope.mensajeOriginal.reverse();
        });       

        $scope.GraficarArbol(_numEstados);
    }


    function stringToBinary(str) {
        var result = "";
        function zeroPad(num) {
            return "00000000".slice(String(num).length) + num;
        }

        for (i = 0; i < str.length; i++) {
            result += zeroPad(str[i].charCodeAt(0).toString(2)) + " ";
        }

        return result;
    };

    function getInputValue(selector, estado, entrada) {
        switch (selector) {
            case "entrada":
                return entrada;
                break;
            case "memoriaUno":
                return estado[0];
                break;
            case "memoriaDos":
                return estado[1];
                break;
            case "memoriaTres":
                return estado[2];
                break;
            default:
                return "";
                break;
        }
    };

    function getHammingDistance(textOne, textTwo) {
        var res = 0;

        if (textOne.length == textTwo.length) {
            for (var i = 0; i < textOne.length; i++) {
                if (textOne[i] != textTwo[i]) {
                    res += 1;
                }
            }
        }

        return res;
    };

    $scope.GraficarArbol = function (num) {

        var ctx = document.getElementById("viterbiChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: $scope.headerViterbi.map(e => e.val),
                datasets: [
                    $scope.caminos[0],
                ]
            },

            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: parseInt(num),
                            stepSize: 1
                        }
                    }]
                }
            }
        });
    }



});

