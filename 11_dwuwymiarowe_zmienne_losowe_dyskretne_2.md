### Zadanie 25

Niech $N$ będzie liczbą klientów wizytujących pewien sklep w danym dniu. Załóżmy, że znamy $EN$ oraz $Var(N)$. Niech $X_i$ będzie sumą pieniędzy jaką średnio wydaje i-ty klient w sklepie. Zakładamy, że $X_i$ są niezależne między sobą oraz są niezależne od $N$. Zmienne $X_i$ mają takie same wartości oczekiwane oraz takie same wariancje:

$EX_i = EX,$

$Var(X_i) = Var(X).$

Niech:

$Y = \sum\limits_{i=1}^N X_i,$

znajdź $EY$ oraz $Var(Y).$

Rozwiązanie:

Aby znaleźć $EY$ nie można bezpośrednio skorzystać z liniowości wartości oczekiwanej ponieważ $N$ jest zmienną losową. Można natomiast przy ustalonym $N=n$ użyć liniowości aby znaleźć $E[Y|N=n]$:

$EY = E[E[Y|N]]$

$= E\left[E\left[\sum\limits_{i=1}^N X_i|N\right]\right] = E\left[\sum\limits_{i=1}^N E[X_i|N]\right]$

$= E\left[\sum\limits_{i=1}^N EX_i\right] = E[NEX]$

$= ENEX.$

Do znalezienia wariancji użyjemy prawa całkowitej wariancji:

$Var(Y) = E[Var(Y|N)] + Var(E[Y|N]) = E[Var(Y|N)] + Var(NEX) = E[Var(Y|N)] + (EX)^2Var(N).$

Aby znaleźć $E(Var(Y|N))$ zauważmy, że przy ustalonym $N=n$, $Y$ jest sumą $n$ niezależnych zmiennych losowych. Dla $n$ niezależnych zmiennych losowych wariancja sumy jest równa sumie wariancji.

$Var(Y|N) = Var\left(\sum\limits_{i=1}^N X_i|N)\right) = \sum\limits_{i=1}^N Var(X_i|N) = \sum\limits_{i=1}^N Var(X_i) = NVar(X),$

stąd:

$E[Var(Y|N)] = E[NVar(X)] = ENVar(X),$

ostatecznie:

$Var(Y) = ENVar(X) + (EX)^2Var(N).$

### Zadanie 26
Zmienna losowa $(X, Y)$ ma funkcję prawdopodobieństwa daną tabelą:

|$y_k$ \ $x_i$|0|1|
|---|---|---|
|-2|0.25|0.25|
|0 |0.25|0.25|

Znajdź funkcję prawdopodobieństwa zmiennej losowej:

a) $Z = X + Y,$

b) $Z = 2X^2Y.$

Rozwiązanie:

Punkty skokowe:

$W_X = \{0, 1\},$

$W_Y = \{-2, 0\}.$

a) 

$W_Z = \{-2, 0, -1, 1\}.$

|$z_i$|-2  |-1  |0   |1   |
|---|---|---|---|---|
|$p_i$|0.25|0.25|0.25|0.25|

b)

$W_V = \{0, 0, -2, 0\} = \{-2, 0\}.$

|$z_i$|-2  |0   |
|---|---|---|
|$p_i$|0.25|0.75|