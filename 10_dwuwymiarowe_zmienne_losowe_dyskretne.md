# Dwuwymiarowe zmienne losowe dyskretne

### Dwuwymiarowa zmienna losowa
Niech $X$ oraz $Y$ będą zmiennymi losowymi określonymi niekoniecznie na tej samej przestrzeni probabilistycznej. Parę $(X, Y)$ zmiennych losowych $X, Y$ nazywamy dwuwymiarową zmienną losową lub dwuwymiarowym wektorem losowym a $X$ oraz $Y$ jej współrzędnymi.

### Dystrybuantą dwuwymiarowej zmiennej losowej

Dystrybuantą dwuwymiarowej zmiennej losowej $(X, Y)$ nazywamy funkcję $F$ zmiennych $x, y$, która dla każdej pary liczb rzeczywistych $(x, y) \in \mathbb{R^2}$ przyjmuje wartości równe prawdopodobieństwu zdarzenia polegającego na tym, że zmienna losowa $X$ przyjmuje wartość mniejszą od $x$ i zmienna losowa $Y$ przyjmuje wartość mniejszą od $y$:

$$F_{XY}(x,y) = P_{XY}(X<x, Y<y)\ \text{dla} \ (x, y) \in \mathbb{R^2}.$$

$F$ nazywamy także dystrybuantą łączną zmiennej losowej $(X, Y)$.

### Własności dystrybuanty

a) $\forall x\in\mathbb{R} \lim\limits_{y \to -\infty} F_{XY}(x, y) = 0, \ \ \ \ \ \forall y\in\mathbb{R} \lim\limits_{x \to -\infty} F_{XY}(x, y) = 0,$

b) $\lim\limits_{x \to \infty \ y \to \infty} F_{XY}(x, y) = 1,$

c) Dla dowolnych punktów: $(x_1, y_1)$, $(x_2, y_2)$ takich, że $x_1 \le x_2$ i $y_1 \le y_2$ zachodzi nierówność:

$F_{XY}(x_2, y_2) - F_{XY}(x_2, y_1) - F_{XY}(x_1, y_2) + F_{XY}(x_1, y_1) \ge 0.$

d) Dystrybuanta jest funkcją niemalejącą i co najmniej lewostronnie ciągłą względem każdego z argumentów $x$ bądź $y$.

### Dwuwymiarowa zmienna losowa skokowa (dyskretna)

Dwuwymiarową zmienną losową $(X, Y)$, która przyjmuje skończoną, bądź przeliczalną liczbę wartości $(x_i, y_k)$, każdą odpowiednio z prawdopodobieństwem:

$$P_{XY}(x, y) = P_{XY}(X = x_i, Y = y_k) = p_{ik} \text{ dla } i, k \in\mathbb{N},$$

przy czym $\sum\limits_{i} \sum\limits_{k} p_{ik} = 1,$ nazywamy dwuwymiarową zmienną losową skokową (dyskretną).

Dla każdego zbioru $A \in \mathbb{R^2}$:

$$P_{XY}((X, Y) \in A) = 
\sum\limits_{a_i < i}\sum\limits_{a_k < k} P_{XY}(X = x_i, Y = y_k)=
\sum\limits_{a_i < i}\sum\limits_{a_k < k}p_{ik}.$$

Oznaczmy:

$p_{i.} = \sum\limits_{k}p_{ik} \ \ \text{dla} \ \ i \in\mathbb{N},$

$p_{.k} = \sum\limits_{i}p_{ik} \ \ \text{dla} \ \ k \in\mathbb{N}.$

$p_{i.} = P_{XY}(X=x_i, Y=y_1) + P_{XY}(X=x_i, Y=y_2)+\dots$ jest prawdopodobieństwem tego, że zmienna losowa $X$ przyjmuje wartość równą $x_i$, bez względu na to, którą z wartości: $y_1, y_2,\dots$ przyjmuje zmienna losowa $Y$, oraz, że $\sum\limits_i p_{i.} = 1,$ a więc funkcja:

$$P_X(X=x_i)=\sum\limits_{k} P_{XY}(X = x_i, Y = y_k)=p_{i.}, \ i\in\mathbb{N}$$

wyznacza rozkład prawdopodobieństwa zmiennej losowej $X$, nazywamy rozkładem brzegowym zmiennej $X$ w rozkładzie dwuwymiarowej zmiennej losowej $(X, Y)$. Analogicznie rozkład brzegowy zmiennej losowej $Y$ określamy wzorem:

$$P_Y(Y=y_k)=\sum\limits_{i} P_{XY}(X = x_i, Y = y_k)=p_{.k}, \ \ k\in\mathbb{N}.$$

Jeśli dwuwymiarowa zmienna losowa $(X, Y)$ przyjmuje skończoną liczbę wartości, to wygodnie jest umieścić wartość funkcji prawdopodobieństwa w tabelce dwudzielczej:

|$y_k$ \ $x_i$|$x_1$|$x_2$|$...$|$x_m$|$p_{.k}$|
|---|---|---|---|---|---|
|$y_1$|$p_{11}$|$p_{21}$|$...$|$p_{m1}$|$p_{.1}$|
|$y_2$|$p_{12}$|$p_{22}$|$...$|$p_{m2}$|$p_{.2}$|
|$...$|$...$|$...$|$...$|$...$|$...$|
|$y_s$|$p_{1s}$|$p_{2s}$|$...$|$p_{ms}$|$p_{.s}$|
|$p_{i.}$|$p_{1.}$|$p_{2.}$|$...$|$p_{m.}$|$1$|

Oznaczmy przez $F_X$ i $F_Y$ dystrybuanty rozkładów brzegowych zmiennych losowych $X$ i $Y$ odpowiednio. Jeśli $(X, Y)$ jest dwuwymiarową zmienną losową skokową, to:

$F_X(x) = \sum\limits_{x_i<x}p_{i.} \ \ \ \text{dla} \ \ \ x\in\mathbb{R}$

$F_Y(y) = \sum\limits_{y_k<y}p_{.k} \ \ \ \text{dla} \ \ \ y\in\mathbb{R}$

### Dystrybuanty brzegowe

$$F_X(x)=F_{XY}(x,∞)=\lim\limits_{y→∞}F_{XY}(x,y)$$

$$F_Y(y)=F_{XY}(∞, y)=\lim\limits_{x→∞}F_{XY}(x,y)$$

### Warunkowanie zdarzeniem

Dla dyskretnej zmiennej losowej $X$ oraz zdarzenia $A$, gęstość $X$ pod warunkiem $A$ jest zdefiniowana jako:

$$P_{X|A}(X=x_i)=P_{X|A}(X=x_i|A)=\frac{P_X(X=x_i, A)}{P(A)}, \ \ i \in \mathbb{N}.$$

Dystrybuanta $X$ pod warunkiem $A$:

$$F_{X|A}(x)=P_{X|A}(X≤x|A) = \frac{P_X(X<x, A)}{P(A)}.$$

Warunkowa wartość oczekiwana:

$$E[X|A]=\sum\limits_i x_iP_{X|A}(X=x_i|A).$$

### Warunkowanie zmienną losową

Dla dyskretnych zmiennych losowych $X$ oraz $Y$, gęstość $X$ pod warunkiem $Y$ jest zdefiniowana jako:

$$P_{X|Y}(x_i|y_k)=P_{X|Y}(X=x_i|Y=y_k) = 
\frac{P_{XY}(X=x_i,Y=y_k)}{P_Y(Y = y_k)} =
\frac{p_{ik}}{p_{.k}}.$$

Gęstość $Y$ pod warunkiem $X$:

$$P_{Y|X}(y_i|x_k)=P_{Y|X}(Y=y_k|X=x_i) =
\frac{P_{XY}(X=x_i,Y=y_k)}{P_Y(X = x_i)}=
 \frac{p_{ik}}{p_{i.}}.$$

Dystrybuanty rozkładów warunkowych oznaczamy odpowiednio przez: $F_{X|Y}(x|y_k), \ F_{Y|X}(y|x_i)$ i wyznaczamy ze wzorów:

$$F_{X|Y}(x|y_k) = P_{X|Y}(X<x|Y=y_k) = \sum\limits_{x_i<x} \frac{p_{ik}}{p_{.k}},$$

$$F_{Y|X}(y|x_i) = P_{Y|X}(Y=y|X=x_i) = \sum\limits_{y_k<y} \frac{p_{ik}}{p_{i.}}.$$

Warunkowa wartość oczekiwana:

$$E[X|Y=y]=\sum\limits_i x_iP_{X|Y}(x_i|y).$$

### LOTUS

$$E[g(X,Y)]=\sum\limits_i \sum\limits_k g(x_i, y_k)P_{XY}(X=x_i, Y=y_k).$$

### Niezależność zmiennych losowych

Zmienne losowe $X$ i $Y$ typu skokowego są niezależne wtedy i tylko wtedy, gdy

$$P_{XY}(x, y) = P_X(x)P_Y(y) \ \text{ dla każdego } \ x, y,$$

czyli:

$$p_{ik} = p_{i.}p_{.k} \ \text{ dla } \ i,k\in\mathbb{N}.$$

Równoważnie, $X$ oraz $Y$ są niezależne gdy:

$$F_{XY}(x,y)=F_X(x)F_Y(y) \ \text{ dla każdego } \ x, y.$$

### Prawdopodobieństwo całkowite

$$P(X \in A)=\sum\limits_k P(X \in A|Y=y_k)P_Y(Y=y_k), \ \text{ dla każdego zbioru } \ A.$$

### Całkowita wartość oczekiwana

Jeżeli $B_1$, $B_2$, $B_3$,... są podziałami przestrzeni zdarzeń $S$:

$$EX=\sum\limits_i E[X|B_i]P(B_i).$$

Dla zmiennej losowej $X$ oraz dyskretnej zmiennej losowej $Y$:

$$EX=\sum\limits_k E[X|Y=y_k]P_Y(Y = y_k).$$

### Warunkowa wartość oczekiwana jako zmienna losowa

Możemy powiedzieć, że $E[X|Y=y]$ jest funkcją $y$ co możemy zapisać jako $g(y)=E[X|Y=y]$. Stąd możemy myśleć o $g$ jako o funkcji z wartościami pochodzącymi ze zmiennej $Y$. Możemy więc napisać, że $g(Y)=E[X|Y]$. Używamy powyższej notacji aby zaznaczyć, że $E[X|Y]$ jest zmienną losową, której wartości są równe $g(y)=E[X|Y=y]$ kiedy $Y=y$. Stąd, jeżeli $Y$ jest zmienną losową to $E[X|Y]$ jest również zmienną losową:

$$E[X|Y]=\begin{cases}
E[X|Y=y_1] & \text{ z prawdopodobieństwem } P(Y=y_1) \\
E[X|Y=y_2] & \text{ z prawdopodobieństwem } P(Y=y_2) \\
\ \ \ \ \ \ \ \ \ \ \ \ .& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ . \\
\ \ \ \ \ \ \ \ \ \ \ \ .& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ . \\
\ \ \ \ \ \ \ \ \ \ \ \ .& \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ .
\end{cases}$$

### Wzory wartość oczekiwana

$E[g(X)h(Y)|X]=g(X)E[h(Y)|X],$

$E[X]=E[E[X|Y]],$

$E\left[\sum\limits_{i=1}^nX_i \right] = \sum\limits_{i=1}^n EX_i.$

Dla niezależnych zmiennych losowych $X$ oraz $Y$:

$E[X|Y]=EX,$

$E[g(X)|Y]=E[g(X)],$

$E[XY]=EXEY,$

$E[g(X)h(Y)]=E[g(X)]E[h(Y)].$

### Wzory wariancja

Dla niezależnych zmiennych losowych $X$ oraz $Y$:

$Var\left(\sum\limits_{i=1}^nX_i \right) = \sum\limits_{i=1}^n Var(X_i),$

$Var(X|Y) = Var(X).$

### Warunkowa wariancja

Niech $μ_{X|Y}(y)=E[X|Y=y]$:

$Var(X|Y=y)=E[(X−μ_{X|Y}(y))^2|Y=y]=\sum\limits_i (x_i−μ_{X|Y}(y))^2 P_{X|Y}(x_i)= E[X^2|Y=y]−μ_{X|Y}(y)^2 = E[X^2|Y=y]−[E[X|Y=y]]^2.$

### Wariancja całkowita

$Var(X)=E[Var(X|Y)]+Var(E[X|Y]).$

# Zadania