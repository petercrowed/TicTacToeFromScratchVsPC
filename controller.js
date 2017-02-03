
var myApp = angular.module('myApp', []);
myApp.controller('controller', function($scope, $timeout)  {

  $scope.board =

   [
    [ { value: '-'}, { value: '-'}, { value: '-'} ],
    [ { value: '-' }, { value: '-' }, { value: '-' } ],
    [ { value: '-' }, { value: '-' }, { value: '-' } ]
  ];

  var round = 0;

 $scope.winningPlayer = 0;
  $scope.reset = function() {


  $scope.change();
  round = 0;
    $scope.currentPlayer = 'X';
    $scope.winner = false;
    $scope.cat = false;
    $scope.isTaken = function(cell) {
       return $scope.disabled= false;
     };
     $scope.isTaken = function(cell) {
        return cell.value !== '-';
      };

      $scope.showWin = false;
    $scope.showTye = false;
  };


  $scope.change = function() {

      var x, y;
      var appElement = document.querySelector('[ng-app=myApp]');

      $timeout(function() {
          $scope.$apply(function() {
              for (x = 0; x <= 2; x++)
                  for (y = 0; y <= 2; y++) {
                      $scope.board[x][y].value = '-';
                  }
          });
      }, 0);
  }
  $scope.reset();

  $scope.isTaken = function(cell) {
     return cell.value !== '-';
   };


  var checkForMatch = function(cell1, cell2, cell3) {
      return cell1.value === cell2.value &&
          cell1.value === cell3.value &&
          cell1.value !== '-';
  };

  var blockButtons = function()
  {
    $scope.isTaken = function(cell) {
         return cell.value !== '-' || cell.value === '-';

     };
  }

  $scope.aiLogic = function()
  {


    		// Blocking "X" for win on sides on the middle
		// Blocking "X" for win on Middle
		if ($scope.board[0][0].value == "X" && $scope.board[0][2].value == "X" && $scope.board[0][1].value == "-") {
			$scope.board[0][1].value = 'O';

		} else

		if ($scope.board[0][0].value == "X" && $scope.board[2][0].value == "X" && $scope.board[1][0].value == "-") {
			$scope.board[1][0].value = 'O';

		} else

		if ($scope.board[2][0].value == "X" && $scope.board[2][2].value == "X" && $scope.board[2][1].value == "-") {
			$scope.board[2][1].value = 'O';

		} else

		if ($scope.board[0][2].value == "X" && $scope.board[2][2].value == "X" && $scope.board[1][2].value == "-") {
			$scope.board[1][2].value = 'O';

		} else

		// Blocking "X" for win on Middle
		if ($scope.board[1][0].value == "X" && $scope.board[1][1].value == "X" && $scope.board[1][2].value == "-") {
			$scope.board[1][2].value = 'O';

		} else

		if ($scope.board[1][2].value == "X" && $scope.board[1][1].value == "X" && $scope.board[1][0].value == "-") {
			$scope.board[1][0].value = 'O';

		} else

		if ($scope.board[2][1].value == "X" && $scope.board[1][1].value == "X" && $scope.board[0][1].value == "-") {
			$scope.board[0][1].value = 'O';

		} else

		if ($scope.board[0][1].value == "X" && $scope.board[1][1].value == "X" && $scope.board[2][1].value == "-") {
			$scope.board[2][1].value = 'O';

		} else

		// Blocking "X" WIn on Sides
		if ($scope.board[0][0].value == "X" && $scope.board[0][1].value == "X" && $scope.board[0][2].value == "-") {
			$scope.board[0][2].value = 'O';

		} else if ($scope.board[0][0].value == "X" && $scope.board[1][0].value == "X" && $scope.board[2][0].value == "-") {
			$scope.board[2][0].value = 'O';

		}

		else
		// Win for PC Sides
		if ($scope.board[0][0].value == "O" && $scope.board[0][1].value == "O" && $scope.board[0][2].value == "-") {
			$scope.board[0][2].value = 'O';

		} else if ($scope.board[0][0].value == "O" && $scope.board[1][0].value == "O") {
			$scope.board[2][0].value = 'O';

		}

		else

		if ($scope.board[2][0].value == "O" && $scope.board[2][1].value == "O" && $scope.board[2][2].value == "-") {
			$scope.board[2][2].value = 'O';

		}

		else

		if ($scope.board[2][2].value == "O" && $scope.board[1][2].value == "O" && $scope.board[0][2].value == "-") {
			$scope.board[0][2].value = 'O';

		}

		// Win for PC Middle
		else if ($scope.board[1][0].value == "O" && $scope.board[1][1].value == "O" && $scope.board[1][2].value == "-") {
			$scope.board[1][2].value = 'O';

		} else

		if ($scope.board[1][2].value == "O" && $scope.board[1][1].value == "O" && $scope.board[1][0].value == "-") {
			$scope.board[1][0].value = 'O';

		} else

		if ($scope.board[2][1].value == "O" && $scope.board[1][1].value == "O" && $scope.board[0][1].value == "-") {
			$scope.board[0][1].value = 'O';

		} else

		if ($scope.board[0][1].value == "O" && $scope.board[1][1].value == "O" && $scope.board[2][1].value == "-") {
			$scope.board[2][1].value = 'O';

		} else

		// Middle
		if ($scope.board[1][1].value == "-") {
			$scope.board[1][1].value = 'O';

		} else

		if ($scope.board[2][0].value == "X" && $scope.board[2][1].value == "X" && $scope.board[2][2].value == "-") {
			$scope.board[2][2].value = 'O';

		}

		else

		if ($scope.board[2][2].value == "X" && $scope.board[1][2].value == "X" && $scope.board[0][2].value == "-") {
			$scope.board[0][2].value = 'O';

		}

		else

		if ($scope.board[1][1].value == "-") {
			$scope.board[1][1].value = 'O';

		} else
		// Corners. Because why not?
		if ($scope.board[0][0].value == "-") {
			$scope.board[0][0].value = 'O';

		} else if ($scope.board[0][2].value == "-") {
			$scope.board[0][2].value = 'O';

		} else if ($scope.board[2][0].value == "-") {
			$scope.board[2][0].value = 'O';

		} else if ($scope.board[2][2].value == "-") {
			$scope.board[2][2].value = 'O';

		} else if

		// The Last empty fields
		($scope.board[0][0].value == ("-")) {
			$scope.board[0][0].value = 'O';

		} else if ($scope.board[0][1].value == ("-")) {
			$scope.board[0][1].value = 'O';

		} else if ($scope.board[0][2].value == ("-")) {
			$scope.board[0][2].value = 'O';

		} else if ($scope.board[1][0].value == ("-")) {
			$scope.board[1][0].value = 'O';

		} else if ($scope.board[1][1].value == ("-")) {
			$scope.board[1][1].value = 'O';

		} else if ($scope.board[1][2].value == ("-")) {
			$scope.board[1][2].value = 'O';

		} else if ($scope.board[2][0].value == ("-")) {
			$scope.board[2][0].value = 'O';

		} else if ($scope.board[2][1].value == ("-")) {
			$scope.board[2][1].value = 'O';

		} else if ($scope.board[2][2].value == ("-")) {
			$scope.board[2][2].value = 'O';

		}

  }
  var checkForEndOfGame = function() {

      for (var y = 0; y <= 2; y++)
          for (var x = 0; x <= 2; x++)
              if ($scope.board[x][0].value == 'X' && $scope.board[x][1].value == 'X' && $scope.board[x][2].value == 'X' ||
                  $scope.board[0][y].value == 'X' && $scope.board[1][y].value == 'X' && $scope.board[2][y].value == 'X' ||
                  $scope.board[0][0].value == 'X' && $scope.board[1][1].value == 'X' && $scope.board[2][2].value == 'X' ||
                  $scope.board[2][0].value == 'X' && $scope.board[1][1].value == 'X' && $scope.board[0][2].value == 'X'
              ) {
               $scope.winningPlayer = "X";
                  block$scope.board();
                  $scope.showWin = true;

              }

      for (var y = 0; y <= 2; y++)
          for (var x = 0; x <= 2; x++)
              if ($scope.board[x][0].value == 'O' && $scope.board[x][1].value == 'O' && $scope.board[x][2].value == 'O' ||
                  $scope.board[0][y].value == 'O' && $scope.board[1][y].value == 'O' && $scope.board[2][y].value == 'O' ||
                  $scope.board[0][0].value == 'O' && $scope.board[1][1].value == 'O' && $scope.board[2][2].value == 'O' ||
                  $scope.board[2][0].value == 'O' && $scope.board[1][1].value == 'O' && $scope.board[0][2].value == 'O'
              ) {
                 $scope.winningPlayer = "O";
                  $scope.showWin = true;
                //  $scope.showTye = true;
              }
              if(round ==5 && $scope.showWin == false)
              {
                $scope.showTye = true;
              }
      return $scope.winner || $scope.cat;
  };

  $scope.move = function(cell) {
  cell.value = $scope.currentPlayer;
  if (checkForEndOfGame() === false) {
      $scope.round = round++;
      $scope.aiLogic();

      console.log($scope.round);
  }
  checkForEndOfGame();
  };

  });
