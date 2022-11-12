# Dwuwymiarowe zmienne losowe ciągłe

### Dwuwymiarowa zmienna losowa ciągła

Niech $X$ oraz $Y$ będą zmiennymi losowymi określonymi niekoniecznie na tej samej przestrzeni probabilistycznej. Parę $(X, Y)$ zmiennych losowych $X, Y$ nazywamy dwuwymiarową zmienną losową lub dwuwymiarowym wektorem losowym a $X$ oraz $Y$ jej współrzędnymi.

### Dystrybuanta dwuwymiarowej zmiennej losowej

Dystrybuantą dwuwymiarowej zmiennej losowej $(X, Y)$ nazywamy funkcję $F$ zmiennych $x, y$, która dla każdej pary liczb rzeczywistych $(x, y) \in \mathbb{R^2}$ przyjmuje wartości równe prawdopodobieństwu zdarzenia polegającego na tym, że zmienna losowa $X$ przyjmuje wartość mniejszą od $x$ i zmienna losowa $Y$ przyjmuje wartość mniejszą od $y$:

$$\begin{equation} F(x,y) = P(X < x, Y < y)\ \text{dla} \ (x, y) \in \mathbb{R^2}. \end{equation}$$

$F$ nazywamy także dystrybuantą łącznej zmiennej losowej $(X, Y)$.

Własności dystrybuanty:

a)

$$\begin{equation} \forall x\in\mathbb{R} \lim\limits_{y \to -\infty} F(x, y) = 0, \ \ \ \ \forall y\in\mathbb{R} \lim\limits_{x \to -\infty} F(x, y) = 0, \end{equation}$$

b)

$$\begin{equation} \lim\limits_{x \to \infty \\ y \to \infty} F(x, y) = 1, \end{equation}$$

c) Dla dowolnych punktów: $(x_1, y_1)$, $(x_2, y_2)$ takich, że $x_1 \le x_2$ i $y_1 \le y_2$ zachodzi nierówność:

$$\begin{equation} F(x_2, y_2) - F(x_2, y_1) - F(x_1, y_2) + F(x_1, y_1) \ge 0. \end{equation}$$

d) Dystrybuanta jest funkcją niemalejącą i co najmniej lewostronnie ciągłą względem każdego z argumentów $x$ bądź $y$.

### Dwuwymiarowa zmienna losowa $(X, Y)$

Dwuwymiarową zmienną losową $(X, Y)$ nazywamy typu ciągłego, jeśli istnieje nieujemna funkcja $f$ taka, że dystrybuanta tej zmiennej losowej da się przedstawić jako całka:

$$\begin{equation} F(x, y) = \int\limits_{-\infty}^x \int\limits_{-\infty}^y f(u, v) dvdu, \ \ \ \text{dla} \ \ \ (x, y) \in\mathbb{R^2}, \end{equation}$$

funkcję $f$ nazywamy gęstością rozkładu prawdopodobieństwa.

Własności dwuwymiarowej zmiennej losowej typu ciągłego:

1) Mamy:
    
    $$\begin{equation} \int\limits_{-\infty}^\infty \int\limits_{-\infty}^\infty f(x, y) dydx = 1, \end{equation}$$

2) w punktach $(x, y)$ ciągłości $f$ mamy:

    $$\begin{equation} \frac{\partial^2F(x, y)}{\partial x \partial y} = f(x, y), \end{equation}$$

3) dla obszaru regularnego $B \subset \mathbb{R^2}$:

    $$\begin{equation} P[(X, Y) \in B] = \iint\limits_{B} f(x,y)dxdy, \end{equation}$$ 

    w szczególności gdy $B$ jest prostokątem, tzn. $B = \{(x, y): a \le x \le b \land c \le y \le d\}$, wtedy:

    $$\begin{equation} P(a \le X \le b \land c \le Y \le d) = \int\limits_a^b \int\limits_c^d f(x, y) dydx. \end{equation}$$

### Rozkład brzegowy

Rozkład brzegowy zmiennej losowej $X$ w rozkładzie dwuwymiarowej zmiennej losowej $(X, Y)$ określa wzór:

$$\begin{equation} f_X(x) = \int\limits_{-\infty}^\infty f(x, y) dy. \end{equation}$$

### Dystrybuanta rozkładu brzegowego

Dystrybuantę rozkładu brzegowego zmiennej losowej $X$ (ciągłej) w rozkładzie dwuwymiarowym zmiennej losowej $(X, Y)$ wyznacza wzór:

$$\begin{equation} F_X(x) = \int\limits_{-\infty}^x \int\limits_{-\infty}^\infty f(u, y) dy du = \int\limits_{-\infty}^x f_X(u)du \ \ \ \text{dla} \ \ \ x\in\mathbb{R}. \end{equation}$$

Analogicznie rozkład brzegowy zmiennej losowej $Y$ w rozkładzie dwuwymiarowej zmiennej losowej $(X, Y)$ określa wzór:

$$\begin{equation} f_Y(y) = \int\limits_{-\infty}^\infty f(x, y) dx. \end{equation}$$

Dystrybuantę rozkładu brzegowego zmiennej losowej $Y$ (ciągłej) w rozkładzie dwuwymiarowym zmiennej losowej $(X, Y)$ wyznacza wzór:

$$\begin{equation} F_Y(y) = \int\limits_{-\infty}^y \int\limits_{-\infty}^\infty f(x, v) dx dv = \int\limits_{-\infty}^y f_Y(v)dv \ \ \ \text{dla} \ \ \ y\in\mathbb{R}. \end{equation}$$

Związek między dystrybuantami rozkładów brzegowych, a dystrybuantą $F$ dwuwymiarowej zmiennej losowej $(X, Y)$, a mianowicie:

$$\begin{equation} \begin{aligned}
F_X(x) = \lim\limits_{y \to \infty} F(x, y), \\
F_Y(y) = \lim\limits_{x \to \infty} F(x, y).
\end{aligned} \end{equation}$$

### Gęstość warunkowa

Gęstość warunkową zmiennej losowej $X$ przy warunku, że zmienna $Y$ przyjęła wartość równą $y$ określa wzór:

$$\begin{equation} f_{X|Y}(x|y) = \frac{f_{XY}(x, y)}{f_Y(y)} \ \ \text{dla} \ \ x\in\mathbb{R} \land c < y < d, \end{equation}$$

przy założeniu, że gęstość brzegowa $f_Y$ jest skoncentrowana na przedziale $(c, d)$.

Dystrybuantę rozkładu warunkowego wyznaczamy według wzoru:

$$\begin{equation} F_{X|Y}(x|y) = \int\limits_{-\infty}^x f_{X|Y}(u|y)du = \frac{1}{f_Y(y)} \int\limits_{-\infty}^x f_{XY}(u, y)du \ \ \ \text{dla} \ \ \ x\in\mathbb{R} \land c < y < d. \end{equation}$$

Analogicznie Gęstość warunkową zmiennej losowej $Y$ przy warunku, że zmienna $X$ przyjęła wartość równą $x$ określa wzór:

$$\begin{equation} f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)} \ \ \text{dla} \ \ y\in\mathbb{R} \land a < x < b, \end{equation}$$

przy założeniu, że gęstość brzegowa $f_X$ jest skoncentrowana na przedziale $(a, b)$.

Dystrybuantę tego rozkładu warunkowego wyznaczamy według wzoru:

$$\begin{equation} F_{Y|X}(y|x) = \int\limits_{-\infty}^y f_{Y|X}(v|x)dv = \frac{1}{f_X(x)} \int\limits_{-\infty}^y f_{XY}(x, v)dv \ \ \text{dla} \ \ y\in\mathbb{R} \land a < x < b. \end{equation}$$

### Niezależność zmiennych losowych

1) Warunkiem koniecznym i wystarczającym na to, by $X$ i $Y$ były niezależnymi zmiennymi losowymi jest, by dla każdego $(x,y) \in \mathbb{R^2}$ dystrybuanta $F$ dwuwymiarowej zmiennej losowej $(X,Y)$ była iloczynem dystrybuant rozkładów brzegowych $F_X$ i $F_Y$:

    $$\begin{equation} F(x,y) = F_X(x)F_Y(y). \end{equation}$$

2) Warunkiem koniecznym i wystarczającym niezależności zmiennych losowych ciągłych $X, Y$ o gęstościach odpowiednio równych $f_X, f_Y$ jest zachodzenie równości: 

    $$\begin{equation} f(x,y) = f_X(x)f_Y(y) \ \ \text{dla} \ \ x, y \in\mathbb{R}, \end{equation}$$

    gdzie $f$ jest gęstością dwuwymiarowej zmiennej losowej $(X,Y)$.

    Zmienne losowe $X$ i $Y$ typu skokowego są niezależne wtedy i tylko wtedy, gdy

    $$\begin{equation} P(X=x_i, Y=y_k) = P(X=x_i)P(Y=y_k) \ \ \text{dla} \ \ i,k\in\mathbb{N}, \end{equation}$$

    czyli:

    $$\begin{equation} p_{ik} = p_{i.}p_{.k} \ \ \text{dla} \ \ i,k\in\mathbb{N}. \end{equation}$$

3) $X$ i $Y$ są niezależnymi zmiennymi losowymi wtedy i tylko wtedy, gdy rozkłady warunkowe są równe odpowiednim rozkładom brzegowym, co można zapisać np. tak:

    $$\begin{equation} F(y|x) = F_Y(y), \ \ \ F(x|y)=F_X(x). \end{equation}$$

### Charakterystyki liczbowe dwuwymiarowej zmiennej losowej

**LOTUS:**

$$\begin{equation}
E[g(X,Y)]=
\begin{cases}
\int\limits_{-\infty}^\infty \int\limits_{-\infty}^\infty g(x,y)f(x,y)dxdy  & \text{dla zmiennej } (X, Y) \text{ typu ciągłego}, \\
                                                                            & \\
\sum\limits_i \sum\limits_k g(x_i, y_k)p_{ik}                               & \text{dla zmiennej } (X, Y) \text{typu skokowego}. \\
\end{cases} \end{equation}$$

**Kowariancja:**

$$\begin{equation} Cov(X,Y) = E[(X-E(X))(Y-E(Y))], \end{equation}$$

$$\begin{equation} Cov(X,Y) = E(XY) - E(X)E(Y). \end{equation}$$

Jeżeli $X$ i $Y$ są niezależne to $Cov(X,Y)=0.$

### Własności kowariancji

$Cov(X,a)=0,$

$Cov(X,X)=Var(X),$

$Cov(X,Y)=Cov(Y,X),$

$Cov(aX,bY)=abCov(X,Y),$

$Cov(X+c,Y+d)=Cov(X,Y),$

$Cov(X+Y,Z)=Cov(X,Z)+Cov(Y,Z),$

bardziej ogólnie:

$Cov\left(\sum\limits_{i=1}^m a_i X_i,\sum\limits_{j=1}^n b_jY_j\right)=\sum\limits_{i=1}^m\sum\limits_{j=1}^n a_ib_jCov(X_i,Y_j).$

**Całkowita kowariancja**:

$$\begin{equation} Cov(X,Y) = E(cov(X, Y|Z)) + cov(E(X|Z), E(Y|Z)). \end{equation}$$

**Macierz kowariancji**:

$$\begin{equation} M = \begin{bmatrix}
D^2(X)   & Cov(X,Y) \\
Cov(X,Y) & D^2(Y)   \\
\end{bmatrix}. \end{equation}$$

**Współczynnik korelacji**:

$$\begin{equation} \rho = \frac{Cov(X,Y)}{\sqrt{D^2(X)D^2(Y)}} = \frac{Cov(X,Y)}{\sigma_X\sigma_Y}. \end{equation}$$

# Zadania

### Zadanie 1

Dobierz stałą $C$ tak, aby funkcja 

$$f(x, y) = \begin{cases}
C & \text{dla } (x, y)\in K, \\
0 & \text{poza tym,}
\end{cases}$$

gdzie $K$ to obszar ograniczony krzywymi $y = 1 − x^2$, $y = 0$,
była gęstością pewnego wektora losowego $(X, Y)$. Oblicz następnie $P(0 < X < 0.5, \ 0 < Y < 1)$. Wyznacz rozkłady brzegowe wektora losowego $(X, Y)$.

Rozwiązanie:

Należy pamiętać po jakim obszarze całkujemy, najlepiej naszkicować sobie najpierw na kartce.

Aby funkcja była gęstością musi spełniać dwa warunki: 

$f(x,y) \ge 0$ dla każdego $(x, y)$,

$\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x, y) dxdy = 1$.

Z pierwszego warunku wynika, że $C \ge 0$, z drugiego mamy:

$1 = \int\limits_{-\infty}^{\infty} \int\limits_{-\infty}^{\infty} f(x, y) dxdy = C \int\limits_{-1}^{1} dx \int\limits_{0}^{1-x^2} dy = C \int\limits_{-1}^{1} (1-x^2) dx = C [x-\frac{x^3}{3}]_{-1}^1 = \frac{4}{3}C,$

stąd:

$C = \frac{3}{4}$

$P(0 < X < 0.5, \ 0 < Y < 1) = \frac{3}{4} \int\limits_{0}^{0.5} dx \int\limits_{0}^{1-x^2} dy = \frac{3}{4} \int\limits_{0}^{0.5} (1-x^2) dy = \frac{3}{4} [x-\frac{x^3}{3}]_0^{0.5} = \frac{11}{32}.$

Obliczę rozkłady brzegowe. W drugim przypadku należy pamiętać aby dobrze dobrać granice całkowania.

$\frac{3}{4} \int\limits_{0}^{1-x^2} dy = \frac{3}{4} (1-x^2),$

stąd:

$$f_1(x) = \begin{cases}
\frac{3}{4} (1-x^2) & \text{dla } -1 \le x \le 1, \\
0                   & \text{dla pozostałych $x$.}
\end{cases}$$

$\frac{3}{4} \int\limits_{-\sqrt{1-y}}^{\sqrt{1-y}} dy = \frac{3}{4} (\sqrt{1-y} + \sqrt{1-y}) = \frac{3}{2}\sqrt{1-y},$

stąd:

$$f_2(x) = \begin{cases}
\frac{3}{2}\sqrt{1-y} & \text{dla } 0 \le y \le 1, \\
0                     & \text{dla pozostałych } y.
\end{cases}$$

### Zadanie 2

Funkcja

$$f(x, y) = \begin{cases}
\frac{3}{8}(x^2y + y) & \text{dla } 0 < x < 1, \ 0 < y < 2, \\
0                     & \text{poza tym,}
\end{cases}$$

jest gęstością pewnego wektora losowego $(X, Y)$. Wyznacz rozkłady brzegowe tego wektora losowego. Sprawdź, czy zmienne losowe $X$ i $Y$ są niezależne.

Rozwiązanie:

Rozkłady brzegowe:

$\frac{3}{8} \int\limits_{0}^{1} (x^2y+y)dy = \frac{3}{8} [\frac{x^2y^2}{2} + \frac{y^2}{2}]_0^2 = \frac{3}{4}(x^2 + 1),$

stąd:

$$f_1(x) = \begin{cases}
\frac{3}{4}(x^2 + 1) & \text{dla } 0 \le x \le 1, \\
0                    & \text{dla pozostałych } x.
\end{cases}$$

$\frac{3}{8} \int\limits_{0}^{1} (x^2y+y)dy = \frac{3}{8} [\frac{x^3y}{3} + xy]_0^1 = \frac{y}{2},$

stąd:

$$f_2(x) = \begin{cases}
\frac{y}{2} & \text{dla } 0 \le y \le 2, \\
0           & \text{dla pozostałych } y.
\end{cases}$$

Niezależność:

$f_1(x)f_2(y) = \frac{3}{4}(x^2 + 1) \cdot \frac{y}{2} = \frac{3}{8}(x^2y + y) = f(x, y).$

Zmienne $X$ oraz $Y$ są więc niezależne.

### Zadanie 3

Dla jakiej stałej $A$ funkcja $g(y, z) = Ae^{-y-z}1_{(0, \infty)\times(0, \infty)}(y, z)$ jest gęstością prawdopodobieństwa pewnej zmiennej losowej $(Y, Z)$.

Rozwiązanie:

Mamy:

$1 = A\int\limits_0^\infty\int\limits_0^\infty e^{-y-z}dzdy = -A\int\limits_0^\infty e^{-y-z}\bigr|_0^\infty dy = A\int\limits_0^\infty e^{-y} dy = -A e^{-y}\bigr|_0^\infty = A,$

stąd:

 $A = 1.$

### Zadanie 4

Dla zmiennej losowej z poprzedniego zadania:

a) oblicz $P(1 < Y < 2, 1 < Z < 2), P(Y+Z > 2), P(Z > 3|Y > 1)$,

b) znajdź dystrybuantę dwuwymiarową i dystrybuanty brzegowe.

c) Czy zmienne $Y, Z$ są niezależne?

Rozwiązanie:

a)

$P(1 < Y < 2, 1 < Z < 2) = \int\limits_1^2 \int\limits_1^2 e^{-y-z}dzdy = \int\limits_1^2 \left(-e^{-y-z}\right)\bigr|_1^2 dy$

$= \int\limits_1^2 \left(-e^{-y-2} -e^{-y-1}\right) dy = \left(e^{-y-2} -e^{-y-1}\right)\bigr|_1^2$

$= \left(e^{-4} -e^{-3}\right) - \left(e^{-3} -e^{-2}\right) = e^{-4} + e^{-2}$

$P(Y+Z > 2) = 1 - P(Y+Z < 2) = 1 - P(Z < 2-Y) = 1 - \int\limits_0^2 \int\limits_0^{2-y} e^{-y-z}dzdy$

$= 1 + \int\limits_0^2 e^{-y-z}\bigr|_0^{2-y} dy = 1 + \int\limits_0^2 e^{-y-2+y} -e^{-y} dy$

$= 1 + \int\limits_0^2 e^{-2} -e^{-y} dy = 1 + \left[ye^{-2} + e^{-y} \right]_0^2$

$= 1 + \left[2e^{-2} + e^{-y} - 1\right] = 3e^{-2}$

$P(Z > 3|Y > 1) = \frac{P(Z > 3,Y > 1)}{P(Y > 1)} = \frac{\int\limits_1^\infty \int\limits_3^\infty e^{-y-z}dzdy}{\int\limits_1^\infty \int\limits_0^\infty e^{-y-z}dzdy} = e^{-3}$

b)

Dystrybuanta dwuwymiarowa; korzystam z wzoru nr (14):

$F(y, z) = \int\limits_0^y \int\limits_0^z e^{-u-v}dvdu = e^{-y-z}-e^{-y}-e^{-z}+1.$

Dystrybuanty brzegowe:

$F_1(y) = \int\limits_0^y \int\limits_0^\infty e^{-u-z}dzdu = 1 - e^{-y},$

$F_2(z) = \int\limits_0^z \int\limits_0^\infty e^{-y-v}dydv = 1 - e^{-z}.$

c)

Zmienne są niezależne bo $F(y, z) = F_1(y)F_2(z)$

### Zadanie 5

Zmienna losowa $(X, Y)$ ma łączną gęstość prawdopodobieństwa:

$$f(x, y) = \begin{cases}
x + y & \text{dla } (x, y) \in [0, 1] \times [0, 1], \\
0     & \text{poza tym,}
\end{cases}$$

oblicz $P(X \le 0.8, Y > 0.25)$.

Rozwiązanie:

$$P(X \le 0.8, Y > 0.25) = \int\limits_{0.25}^1 \left[ \int\limits_{0}^1 (x+y)dx \right]dy$$

$$= \int\limits_{0.25}^1 \left[ \frac{x^2}{2} + xy \right]_{x=0}^{x=0.8}dy = \int\limits_{0.25}^1 \left( \frac{0.8^2}{2} + 0.8y \right)dy$$

$$= \left[ \frac{0.8^2}{2}y + 0.8\frac{y^2}{2} \right]_{x=0.25}^{x=1} = 0.615$$

### Zadanie 6

Niech $(X, Y)$ oznacza parę liczb pseudolosowych wygenerowanych przez generator rozkładu jednostajnego. Wówczas gęstość:

$$f(x, y) = \begin{cases}
1 & \text{dla $(x, y) \in [0, 1]$}, \\
0 & \text{poza tym,}
\end{cases}$$

oblicz $P(X < Y)$.

Rozwiązanie:

$P(X < Y) = \int\limits_{0}^1 \left[ \int\limits_{0}^y dx \right]dy = \int\limits_{0}^1 y dy =\frac{1}{2}.$

### Zadanie 7

Niech: 

$$f(x, y) = \begin{cases}
Cx^2 & \text{dla $-1 \le x \le 1, \ \ \ 0 \le y \le x^2$}, \\
0 & \text{poza tym,}
\end{cases}$$

Dla jakiej wartości $C$ funkcja $f$ jest gęstością prawdopodobieństwa?

Rozwiązanie:

$1 = C\int\limits_{-1}^1 \left[ \int\limits_0^{x^2} x^2 dy\right]dx = C\int\limits_{-1}^1 \left[ yx^2 \right]_{y=0}^{y=x^2} dx = C\int\limits_{-1}^1 x^4 dx = C \frac{x^5}{5}|_{-1}^1 = \frac{2C}{5},$

$C = \frac{5}{2}$

### Zadanie 8

Gęstość $f$ ma postać:

$$f(x, y) = \begin{cases}
Cx(x+y) & \text{dla } x,y \ge 0, \ \ \ y \le 1 - x, \\
0       & \text{poza tym,}
\end{cases}$$

oblicz $P(X\le\frac{1}{2})$.

Rozwiązanie:

$1 = C\int\limits_0^1 \left[ \int\limits_0^{1-x} x(x+y) dy\right]dx$

$= C\int\limits_0^1 \left[ yx^2 +\frac{xy^2}{2} \right]_{y=0}^{y=1-x}dx = C\int\limits_0^1 \left[ (1-x)x^2 +\frac{x}{2}(1-x)^2 \right] dx$

$=C\int\limits_0^1 \left[ x^2-x^3 + \frac{x}{2}-x^2+\frac{x^3}{2} \right] dx = C\int\limits_0^1 \left[ \frac{x}{2}-\frac{x^3}{2} \right] dx$

$= C \left[ \frac{x^2}{4}-\frac{x^4}{8} \right]_0^1 = \frac{1}{8} C$

$C = 8$

$P(X \le \frac{1}{2}) = 8\int\limits_0^{0.5} \left[ \int\limits_0^{1-x} x(x+y) dy\right]dx = 8\left[ \frac{x^2}{4}-\frac{x^4}{8} \right]_0^{0.5} = 8[\frac{1}{16} - \frac{1}{128}] = \frac{7}{16}$

### Zadanie 9
Dwuwymiarowa zmienna losowa $(X, Y)$ ma gęstość:

$$f(x, y) = \begin{cases}
\frac{3}{8}(x+y)^2 & \text{dla } (x,y) \in [-1,1]\times[-1,1], \\
0                  & \text{poza tym,}
\end{cases}$$

a) Wyznacz gęstości brzegowe.

b) Czy zmienne losowe są niezależne?

Rozwiązanie:

a)

$f_X(x) = \frac{3}{8}\int\limits_{-1}^1 (x-y)^2 dy$

$= \frac{3}{8}\int\limits_{-1}^1 (x^2-2xy+y^2) dy = \frac{3}{8}\left[x^2y-xy^2+\frac{y^3}{3}\right]_{y=-1}^{y=1}$

$= \frac{3}{8}\left[x^2-x+\frac{1}{3} +x^2+x+\frac{1}{3}\right] = \frac{3}{8}\left[2x^2+\frac{2}{3}\right]$

$= \frac{3}{4}\left[x^2+\frac{1}{3}\right]$

$f_Y(y) = \frac{3}{4}\left[y^2+\frac{1}{3}\right]$

b)

Zmienne losowe nie są niezależne bo:

$f_X(x)f_Y(y) \ne f(x, y)$

### Zadanie 10

Zmienna losowa $(X, Y)$ ma gęstość:

$$f(x, y) = \begin{cases}
Cxy & \text{dla } 0 < x < 1, \ 0 < y < 1, \\
0   & \text{poza tym,}
\end{cases}$$

znajdź:

a) $C$,

b) $P(X^2 < Y < X)$,

c) Dystrybuantę $F$ zmiennej losowej $(X,Y)$.

Rozwiązanie:

a)

$1 = C \int\limits_0^1 \left[\int\limits_0^1 xy  dy\right]dx = C \int\limits_0^1 x\left[\frac{y^2}{2}\right]_0^1dx = \frac{C}{2} \int\limits_0^1 xdx = \frac{C}{4}$

$C = 4$

b)

$P(X^2 < Y < X) = 4 \int\limits_0^1 \left[\int\limits_{x^2}^x xy  dy\right]dx = 2 \int\limits_0^1 \left[x^3 - x^5\right]dx = \frac{1}{6}$

c)

1) $(x, y) \in A$

    $F(x, y) = 4\int\limits_0^x\left[ \int\limits_0^y uv dv\right]du = x^2y^2$

2) $(x, y) \in B$

    $F(x, y) = 4\int\limits_0^1\left[ \int\limits_0^y uv dv\right]du = y^2$

3) $(x, y) \in C$

    $F(x, y) = 4\int\limits_0^x\left[ \int\limits_0^1 uv dv\right]du = x^2$

4) $(x, y) \in D$

    $F(x, y) = 4\int\limits_0^1\left[ \int\limits_0^1 uv dv\right]du = 1$

5) $(x, y) \in E$

    $F(x, y) = 0$

Ostatecznie:

$$F_{XY}(x, y) = \begin{cases}
0      & E=\{(x,y): x<0 \vee y<0\}, \\
x^2y^2 & A=\{(x,y): 0\le x<1  \wedge 0\le y<1\}, \\
y^2    & B=\{(x,y): x\ge1  \wedge 0\le y<1\}, \\
x^2    & C=\{(x,y): 0\le x<1  \wedge y\ge 1\}, \\
1      & D=\{(x,y): x\ge1  \wedge y\ge 1\}, \\
\end{cases}$$







