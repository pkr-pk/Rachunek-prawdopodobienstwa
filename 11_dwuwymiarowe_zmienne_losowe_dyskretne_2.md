### Zadanie 13

Dla danych z poniższej tabeli:

|$x_i$ \ $y_k$|-2|-1|0|1|2|$p_{.k}$|
|---|---|---|---|---|---|---|
|-2|0|0|$\frac{1}{13}$|0|0|$\frac{1}{13}$|
|-1|0|$\frac{1}{13}$|$\frac{1}{13}$|$\frac{1}{13}$|0|$\frac{3}{13}$|
|0|$\frac{1}{13}$|$\frac{1}{13}$|$\frac{1}{13}$|$\frac{1}{13}$|$\frac{1}{13}$|$\frac{5}{13}$|
|1|0|$\frac{1}{13}$|$\frac{1}{13}$|$\frac{1}{13}$|0|$\frac{3}{13}$|
|2|0|0|$\frac{1}{13}$|0|0|$\frac{1}{13}$|
|$p_{i.}$|$\frac{1}{13}$|$\frac{3}{13}$|$\frac{5}{13}$|$\frac{3}{13}$|$\frac{1}{13}$|1|

Znajdź:

a) $E[X|Y=1]$,

b) $E[X|−1<Y<2]$,

c) $E[|X||−1<Y<2]$.

Rozwiązanie:

a) $E[X|Y=1] = \sum\limits_i x_i P_{X|Y}(X=x_i|Y=1) = -2\cdot0 -1\cdot\frac{1}{3}+0\cdot\frac{1}{3}+1\cdot\frac{1}{3}+2\cdot0 = 0$

b) $E[X|−1<Y<2] =  \sum\limits_i x_i P_{X|Y}(X=x_i|−1 < Y < 2),$

$P_{X|Y}(X=x_i|−1<Y<2) = \frac{P_{XY}(X=x_i|−1 < Y < 2)}{P_Y(−1 < Y < 2)},$

$P_Y(−1 < Y < 2) = \frac{8}{13},$

$P_{X|Y}(X=-2|−1 < Y < 2) = \frac{\frac{1}{13}}{\frac{8}{13}} = \frac{1}{8},$

$P_{X|Y}(X=-1|−1 < Y < 2) = \frac{\frac{2}{13}}{\frac{8}{13}} = \frac{2}{8},$

$P_{X|Y}(X=0|−1 < Y < 2) = \frac{\frac{2}{13}}{\frac{8}{13}} = \frac{2}{8},$

$P_{X|Y}(X=1|−1 < Y < 2) = \frac{\frac{2}{13}}{\frac{8}{13}} = \frac{2}{8},$

$P_{X|Y}(X=2|−1 < Y < 2) = \frac{\frac{1}{13}}{\frac{8}{13}} = \frac{1}{8},$

$E[X|−1<Y<2] =  -2\cdot\frac{1}{8} -1\cdot\frac{2}{8}+0\cdot\frac{2}{8}+1\cdot\frac{2}{8}+2\cdot\frac{1}{8} = 0$

c) 

$E[|X| \ |−1 < Y < 2] = \sum\limits_i |x_i| P_{X|Y}(X=x_i|−1<Y<2)$

$ = 2\cdot\frac{1}{8} + 1\cdot\frac{2}{8} + 0\cdot\frac{2}{8} + 1\cdot\frac{2}{8}+ 2\cdot\frac{1}{8} = 1$

### Zadanie 14

W worku znajduje się 40 niebieskich kul oraz 60 czerwonych kul. Losujemy 10 kul bez zwracania. Niech $X$ to liczba wylosowanych kul niebieskich a $Y$ to liczba wylosowanych kul niebieskich. Znaleźć łączną funkcję prawdopodobieństwa zmiennych $X$ i $Y$.

Rozwiązanie:

Jest to rozkład hipergeometryczny:

$$P_{XY}(i, j)=\begin{cases}
\frac{{40\choose i}{60\choose j}}{{100\choose10}} & i+j=10; \ i,j\in\mathbb{Z}; \ i,j \ge 0, \\
0                                                 & \text{p.p.} \\
\end{cases}$$

### Zadanie 15

Niech $X$ i $Y$ będą dyskretnymi zmiennymi losowymi o wartościach ze zbioru:

$R_{XY}=\{(i,j)∈\mathbb{Z}^2;i,j≥0;|i−j|≤1\},$

o łącznej funkcji prawdopodobieństwa:

$P_{XY}(i,j)=\frac{1}{6⋅2^{\min(i,j)}}, \ \text{dla } (i,j)\in R_{XY}.$

a) Znajdź rozkłady brzegowe $P_X(i)$ oraz $P_Y(j)$.

b) Znajdź $P(X=Y|X<2)$.

c) Znajdź $P(1 \le X^2+Y^2 \le 5)$.

d) Znajdź $P(X=Y)$.

e) Znajdź $E[X|Y=2]$.

f) Znajdź $Var(X|Y=2)$.

Rozwiązanie:

a) 

Przez symetrię widać, że $X$ i $Y$ mają takie same funkcje prawdopodobieństwa. Możemy zapisać:

$P_X(0)=P_{XY}(0,0)+P_{XY}(0,1)=\frac{1}{6}+\frac{1}{6}=\frac{1}{3},$

$P_X(1)=P_{XY}(1,0)+P_{XY}(1,1)+P_{XY}(1,2)=\frac{1}{6}(1+\frac{1}{2}+\frac{1}{2})=\frac{1}{3},$

$P_X(2)=P_{XY}(2,1)+P_{XY}(2,2)+P_{XY}(2,3)=\frac{1}{6}(\frac{1}{2}+\frac{1}{4}+\frac{1}{4})=\frac{1}{6},$

$P_X(3)=P_{XY}(3,2)+P_{XY}(3,3)+P_{XY}(3,4)=\frac{1}{6}(\frac{1}{4}+\frac{1}{8}+\frac{1}{8})=\frac{1}{12}.$

W ogólności:

$$P_X(k) = P_Y(k) = \begin{cases}
\frac{1}{3},             & k=0 \\
\frac{1}{3\cdot2^{k-1}}, & k=1,2,3,... \\
0,                       & \text{p.p.} \\
\end{cases}$$

b)

$P(X=Y|X < 2)=\frac{P(X=Y,X < 2)}{P(X < 2)}$

$=\frac{P_{XY}(0,0)+P_{XY}(1,1)}{P_X(0)+P_X(1)}=\frac{\frac{1}{6}+\frac{1}{12}}{\frac{1}{3}+\frac{1}{3}}=\frac{3}{8}$.

c)

$P(1 \le X^2+Y^2 \le 5)$

$=P_{XY}(0,1)+P_{XY}(1,0)+P_{XY}(1,1)+P_{XY}(1,2)+P_{XY}(2,1)$

$=\frac{1}{6}+\frac{1}{6}+\frac{1}{12}+\frac{1}{12}+\frac{1}{12}=\frac{7}{12}.$

d)

$P(X=Y)=\sum\limits_{i=0}^\infty P_{XY}(i,i)=\sum\limits_{i=0}^\infty \frac{1}{6\cdot2^i}=\frac{1}{6}\cdot2=\frac{1}{3}.$

e)

Aby znaleźć $E[X|Y=2]$ należy najpierw znaleźć rozkład warunkowy zmiennej $X$ przy ustalonym $Y=2$:

$P_{X|Y}(k|2)=\frac{P_{XY}(k,2)}{P_Y(2)}=6P_{XY}(k,2),$

mamy:

$$P_{X|Y}(k|2) = \begin{cases}
\frac{1}{2}, & k=1 \\
\frac{1}{4}, & k=2,3 \\
0,           & \text{p.p.} \\
\end{cases}$$

stąd:

$E[X|Y=2]=1⋅\frac{1}{2}+2⋅\frac{1}{4}+3⋅\frac{1}{4}=\frac{7}{4}.$

f)

$E[X^2|Y=2]=1⋅\frac{1}{2}+4\frac{1}{4}+9⋅\frac{1}{4}=\frac{15}{4},$

stąd:

$Var(X)=E[X^2|Y=2]−(E[X|Y=2])^2=\frac{15}{4}−\frac{49}{16}=\frac{11}{16}.$
