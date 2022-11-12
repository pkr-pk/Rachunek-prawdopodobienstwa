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

### Zadanie 27

Niech zmienna losowa $(X,Y)$ oznacza wygrane (w tysiącach zł) w dwu etapach teleturnieju przez losowo wybranego uczestnika konkursu. Funkcję prawdopodobieństwa zmiennej $(X,Y)$ przedstawia tabela:

|$y_k$ \ $x_i$|0|5|10|$p_{.k}$|
|---|---|---|---|---|
|0       |0.5|0   |0   |0   |
|1       |0.3|0.02|0.01|0.01|
|3       |0.1|0.05|0.02|0.01|
|$p_{i.}$|0.9|0.07|0.03|1   |

Zmienna losowa $Z = X + Y$ jest łączną wygraną. Oblicz:

a) wartość oczekiwaną łącznej wygranej,

b) $Cov(X, Y)$,

c) $Var(Z)$.

Rozwiązanie:

a)

Punkty skokowe:

$W_X = \{0, 5, 10\},$

$W_Y = \{0, 1, 3\}$

$W_Z = \{0, 1, 3, 5, 6, 8, 10, 11, 13\}$

$E(Z) = E(X + Y) = 0.3 + 3\cdot0.1 + 6\cdot0.2 + 8\cdot0.05 + 11\cdot0.01   + 13\cdot0.02 = 2.57.$

b)

$E(XY) = 5\cdot0.02 + 10\cdot0.01 + 15\cdot0.05 + 30\cdot0.02 = 1.55,$

$E(X) = 0.33 + 3\cdot0.17 = 0.84,$

$E(Y) = 5\cdot0.07 + 10\cdot0.03 = 0.65,$

$Cov(X,Y) = 1.55 - 0.84\cdot0.65 = 1.004.$

c)

$Var(Z) = Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y)$

$E(X^2) = 0.33 + 9\cdot0.17 = 1.86,$

$E(Y^2) = 25\cdot0.07 + 100\cdot0.03 = 4.75,$

$Var(X) = 1.86 - 0.84^2 = 1.1544,$

$Var(Y) = 4.75 - 0.65^2 = 4.3275,$

$Var(Z) = 1.1544 + 4.3275 + 2\cdot1.004 = 7.4899.$