### Zadanie 50
Niech

$$
f(x) = \begin{cases}
\frac{3}{4}(1-x^2) & \text{dla } -1 \le x \le 1, \\
0                  & \text{w p.p.}  
\end{cases}
$$

Znaleźć dystrybuantę i narysować jej wykres, obliczyć $E(X)$, $D^2(X)$, $P(X < −\frac{1}{2})$, $P(|X| > \frac{1}{3})$.

Rozwiązanie:

$\frac{3}{4}\int_{-1}^t 1 - x^2 dx = \frac{1}{4}(3t - t^3 + 2)$

$$
F(x) = \begin{cases}
0                         & \text{dla } x < 0, \\
\frac{1}{4}(3t - t^3 + 2) & \text{dla } x \in [-1, 1), \\
1                         & \text{dla } x \ge 1. \\
\end{cases}
$$

$E(X) = \int_{-1}^1 \frac{3}{4}x(1-x^2) dx = 0,$

$E(X^2) = \int_{-1}^1 \frac{3}{4}x^2(1-x^2) dx = 0.2,$

$D^2(X) = 0.2,$

$P(X < -\frac{1}{2}) = \frac{1}{4}(3(-\frac{1}{2}) - (-\frac{1}{2})^3 + 2) = \frac{5}{32},$

$P(|X| > \frac{1}{3}) = P(X > \frac{1}{3} \cup X < -\frac{1}{3}) = P(X < - \frac{1}{3}) + 1 - P(X < \frac{1}{3}) = \frac{1}{4}(3(-\frac{1}{3}) - (- \frac{1}{3})^3 + 2) + 1 - \frac{1}{4}(3(\frac{1}{3}) - (\frac{1}{3})^3 + 2) = \frac{14}{27}.$

### Zadanie 51
Dobrać tak stałą $a$, by funkcja

$$f(x) = \begin{cases}
a \cos(x) & \text{dla } -\frac{\pi}{2} \le x < \frac{\pi}{2}, \\
0         & \text{w p.p.}  
\end{cases}$$

była gęstością pewnej zmiennej losowej $X$. Znaleźć dystrybuantę, obliczyć $E(X)$, $D^2(X)$, $P(|X| > \frac{\pi}{6})$, $P(X ­ \ge \frac{\pi}{3})$, $P(−\frac{\pi}{6} < X \le \frac{\pi}{2})$ oraz medianę i modę $X$.

Rozwiązanie:

$1 = a\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos(x) dx = 2a,$

$a = \frac{1}{2}.$

Dystrybuanta:

$\frac{1}{2} \int_{-\frac{\pi}{2}}^t \cos(x) dx = \frac{1}{2}(\sin(t)+1),$

$$F(x) = \begin{cases}
0                      & \text{dla } x < 0, \\
\frac{1}{2}(\sin(x)+1) & \text{dla } -\frac{\pi}{2} \le x < \frac{\pi}{2}, \\
1                      & \text{dla } x \ge 1. \\
\end{cases}$$

$E(X) = \frac{1}{2}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x \cos(x) dx = 0,$

$E(X^2) = \frac{1}{2}\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} x^2\cos(x) dx = \frac{\pi^2}{4} - 2,$

$D^2(X) = \frac{\pi^2}{4} - 2,$

$P(|X| > \frac{\pi}{6}) = P(X > \frac{\pi}{6} \cup X < -\frac{\pi}{6}) = P(X < -\frac{\pi}{6}) + 1 - P(X < \frac{\pi}{6}) = \frac{1}{2}(\sin(-\frac{\pi}{6})+1) + 1 - \frac{1}{2}(\sin(\frac{\pi}{6})+1) = 0.5,$

$P(X \ge \frac{\pi}{3}) = 1 - P(X \le \frac{\pi}{3}) = 1 - \frac{1}{2}(\sin(\frac{\pi}{3})+1) = \frac{1}{2} - \frac{\sqrt{3}}{4},$

$P(−\frac{\pi}{6} < X \le \frac{\pi}{2}) = P(X \le \frac{\pi}{2}) - P(X < −\frac{\pi}{6}) = \frac{1}{2}(\sin(\frac{\pi}{2})+1) - \frac{1}{2}(\sin(-\frac{\pi}{6})+1) = 0.75.$

Mediana:

$P(X < m) = 0.5,$

$\frac{1}{2}(\sin(m)+1) = 0.5,$

$\sin(m) = 0,$

$m = \arcsin(0),$

$m = 0.$

Moda:

Moda to wartość dla której gęstość prawdopodobieństwa osiąga maksimum.

$f'(x) = (\frac{1}{2}\cos(x))' = -\frac{1}{2}\sin(x),$

$-\frac{1}{2}\sin(x) = 0,$

$x = \arcsin(0),$

$x = 0.$


### Zadanie 52
Funkcja gęstości prawdopodobieństwa zmiennej losowej X jest postaci:

$$f(x) = \begin{cases}
0        & \text{dla } x \le 0, \\
2e^{-2x} & \text{dla } x > 0.
\end{cases}$$

Znaleźć dystrybuantę, obliczyć $E(X)$, $D^2(X)$, $P(X > 1)$, $P(0 < X \le ln 3)$ oraz medianę $X$.

Rozwiązanie:

$2\int_0^t e^{-2x} dx = 1 - e^{-2t},$

$$F(x) = \begin{cases}
0           & \text{dla } x \le 0, \\
1 - e^{-2x} & \text{dla } x > 1.
\end{cases}$$

$E(X) = 2\int_0^\infty xe^{-2x}dx = \frac{1}{2},$

$E(X^2) = 2\int_0^\infty x^2e^{-2x}dx = \frac{1}{2},$

$D^2(X) = \frac{1}{4},$

$P(X > 1) = 1 - P(X < 1) = 1 - (1-e^{-2}) = e^{-2},$

$P(0 < X \le \ln3) = P(X \le \ln3) - P(X \le 0) = 1-e^{-2\ln3} - 0 = 1-e^{\ln(3^{-2})} = 1 - \frac{1}{3^2} = \frac{8}{9}.$

Mediana:

$P(X < m) = 0.5,$

$1-e^{-2m} = 0.5,$

$e^{-2m} = 0.5,$

$-2m = \ln(0.5),$

$m = -\frac{\ln(0.2)}{2} = \frac{\ln2}{2}.$

### Zadanie 53
Niech gęstość pewnej zmiennej $X$ będzie postaci

$$f(x) = \begin{cases}
0             & \text{dla } x \le 1, \\
\frac{2}{x^3} & \text{dla } x > 1.
\end{cases}$$

Znaleźć dystrybuantę, obliczyć $E(X)$, $D^2(X)$, $P(|X| > 1)$, oraz medianę $X$.

Rozwiązanie:

$2\int_0^t \frac{1}{x^3} dx = 1 - t^{-2},$

$$F(x) = \begin{cases}
0          & \text{dla } x \le 1, \\
1 - x^{-2} & \text{dla } x > 1.
\end{cases}$$

$E(X) = 2\int_0^\infty \frac{1}{x^2} dx = 2,$

$E(X^2) = 2\int_0^\infty \frac{1}{x} dx = \infty,$

$D^2(X) = \infty,$

$P(|X| > 1) = P(X > 1 \cup X < -1) = P(X < -1)+ 1 -P(X < 1) = 0 + 1 - 0 = 1.$

Mediana:

$P(X < m) = 0.5,$

$1 - \frac{1}{x^2} = 0.5,$

$\frac{1}{x^2} = 0.5,$

$x = \sqrt{2}.$


### Zadanie 54
Niech $f(x) = \frac{1}{\pi} \cdot \frac{1}{1+x^2} \ \text{dla } x \in \mathbb{R}$. Znaleźć dystrybuantę i narysować, zbadać istnienie $E(X)$. Obliczyć $P(0 < X \le 1)$, $P(3X − 1 > \sqrt{3} − 1)$, $P(0 < X < \sqrt{3})$. Znaleźć medianę oraz modę.

Rozwiązanie:

$F(x) = \frac{1}{\pi} \int_{-\infty}^t \frac{dx}{1 + x^2} = \frac{1}{\pi}\arctan(x)\bigr|_{-\infty}^t = \frac{1}{\pi}(\arctan(t) + \frac{\pi}{2}) \ \text{dla } t \in \mathbb{R}$

$$E(X) = \frac{1}{\pi} \int_{-\infty}^\infty \frac{xdx}{1 + x^2} = \left|\begin{aligned} t = x^2 \\ 2xdx = dt \end{aligned}\right| = \frac{1}{2\pi} \int_{\infty}^\infty \frac{xdx}{1 + t} = \frac{1}{2\pi} \ln(1 + t)\biggr|_\infty^\infty = \infty - \infty,$$

czyli wartość oczekiwana nie istnieje.

$P(0 < X \le 1) = P(X \le 1) - P(X < 0) = \frac{1}{\pi}(\arctan(1) + \frac{\pi}{2}) - \frac{1}{\pi}(\arctan(0) + \frac{\pi}{2}) = \frac{1}{4},$

$P(3X − 1 > \sqrt{3} − 1) = P(3X > \sqrt{3}) = 1 - P(X < \frac{\sqrt{3}}{3}) = 1 - \frac{1}{\pi}(\arctan(\frac{\sqrt{3}}{3}) + \frac{\pi}{2}) = \frac{1}{3},$

$P(0 < X < \sqrt{3}) = P(X < \sqrt{3}) - P(X < 0) = \frac{1}{\pi}(\arctan(\sqrt{3}) + \frac{\pi}{2}) - \frac{1}{\pi}(\arctan(0) + \frac{\pi}{2}) = \frac{1}{3}.$

Mediana:

$P(X < m) = 0.5,$

$\frac{1}{\pi}(\arctan(m) + \frac{\pi}{2}) = \frac{1}{2},$

$\arctan(m) + \frac{\pi}{2} = \frac{\pi}{2},$

$\arctan(m) = 0,$

$m=0.$

Moda:

$f'(x) = 0,$

$\left(\frac{1}{\pi} \cdot \frac{1}{1+x^2}\right)' = 0,$

$\frac{1}{\pi} \cdot \frac{-2x}{(1+x^2)^2} = 0,$

$x = 0.$


### Zadanie 55
Zmienna $X$ ma gęstość postaci

$$f(x) = \begin{cases}
0                   & \text{dla } x < 0, \\
xe^{-\frac{x^2}{2}} & \text{dla } x \ge 0.
\end{cases}$$

Znaleźć dystrybuantę, medianę, modę, wartość oczekiwaną, $P(X > \sqrt{\ln4})$, $P(X \le \sqrt{\ln9})$.

Rozwiązanie:

$$\int_0^t xe^{-\frac{x^2}{2}}dx = \left|\begin{aligned} z = \frac{x^2}{2} \\ dz = xdx\end{aligned}\right| = \int_0^{t} e^{-z}dz = -e^{-z}\bigr|_0^t = -e^{-\frac{x^2}{2}}\bigr|_0^t = -(e^{-\frac{t^2}{2}} - e^{-\frac{0}{2}}) = 1 - e^{-\frac{t^2}{2}},$$

$$F(x) = \begin{cases}
0                      & \text{dla } x < 0, \\
1 - e^{-\frac{x^2}{2}} & \text{dla } x \ge 1.
\end{cases}$$

$E(X) = \int_0^\infty x^2e^{-\frac{x^2}{2}} = \frac{\sqrt{2\pi}}{2}.$

$P(X > \sqrt{\ln4}) = 1 - P(X < \sqrt{\ln4}) = 1 - 1 + e^{-\frac{(\sqrt{\ln4})^2}{2}} = e^{-\frac{\ln4}{2}} = \exp(\ln(4^{-0.5})) = \exp(\ln(\frac{1}{2})) = \frac{1}{2},$

$P(X \le \sqrt{\ln9}) = 1 - e^{-\frac{(\sqrt{\ln9})^2}{2}} = 1 - e^{-\frac{\ln9}{2}} =1 - \exp(\ln(9^{-0.5})) =1- \exp(\ln(\frac{1}{3})) = 1- \frac{1}{3} = \frac{2}{3}.$

Poniższe równania mają dwa rozwiązania ale należy wziąć pod uwagę, że $x \ge 0$ co ostatecznie da jeden dodatni wynik.

Mediana:

$P(X < m) = 0.5,$

$1 - e^{-\frac{m^2}{2}} = 0.5,$

$e^{-\frac{m^2}{2}} = 0.5,$

$-\frac{m^2}{2} = ln(0.5),$

$m^2 = -2ln(0.5),$

$m = \sqrt{(ln4)}.$

Moda:

$f'(x) = 0,$

$\left(xe^{-\frac{x^2}{2}}\right)' = 0,$

$e^{-\frac{x^2}{2}} + xe^{-\frac{x^2}{2}}(-x)= 0,$

$e^{-\frac{x^2}{2}}(1 - x^2)= 0,$

$x = 1.$

### Zadanie 56
Zmienna $X$ ma gęstość postaci

$$f(x) = \begin{cases}
\frac{1}{\pi} \cdot \frac{1}{\sqrt{4-x^2}} & \text{dla } |x| < 2. \\
0                                          & \text{w p.p.}
\end{cases}$$

Zbadać istnienie $E(X)$. Wyznaczyć dystrybuantę $X$ oraz obliczyć $P(1 < X \le 2)$.

Rozwiązanie:

$E(X) = \int_{-2}^2 \frac{1}{\pi} \cdot \frac{xdx}{\sqrt{4-x^2}} = 0.$

$$\frac{1}{\pi} \int_{-2}^t \frac{1}{\sqrt{4-x^2}}dx = 
\frac{1}{\pi} \int_{-2}^t \frac{1}{2\sqrt{1-(\frac{x}{2})^2}}dx = $$

$$\left|\begin{aligned} sin(z) = \frac{x}{2} \\ cos(z)dz = \frac{dx}{2}\end{aligned}\right| = 
\frac{1}{\pi} \int_{-2}^t \frac{cos(z)dz}{\sqrt{1-sin^2(z)}}= 
\frac{1}{\pi} \int_{-2}^t \frac{cos(z)dz}{\sqrt{cos^2(z)}}=$$

$$\frac{1}{\pi} \int_{-2}^t dz = \frac{1}{\pi} z\biggr|_{-2}^t = 
\frac{1}{\pi} arcsin(\frac{x}{2})\biggr|_{-2}^t = \frac{1}{\pi}(arcsin(\frac{t}{2})+\frac{\pi}{2}) = \frac{1}{\pi}arcsin(\frac{t}{2})+\frac{1}{2}$$

$$F(x) = \begin{cases}
0                                            & \text{dla } x < -2, \\
\frac{1}{\pi}arcsin(\frac{t}{2})+\frac{1}{2} & \text{dla } x \in [-2, 2), \\
1                                            & \text{dla } x \ge 2.
\end{cases}$$

$P(1 < X \le 2) = P(X \le 2) - P(X < 1) = 1 - \frac{1}{\pi}arcsin(\frac{1}{2}) - \frac{1}{2} = \frac{1}{3}$

### Zadanie 57
Zmienna $X$ ma gęstość postaci

$$f(x) = \begin{cases}
e^{2x} & \text{dla } x \in (0, \ln\sqrt{3}). \\
0      & \text{w p.p.}
\end{cases}$$

Znaleźć $P(\ln2 < X \le 1)$, $P(X < \ln\frac{1}{2})$.

Rozwiązanie:

$P(\ln 2 < X \le 1) = P(X < \ln\frac{1}{2}) = 0,$

bo:

$\ln2 > \ln\sqrt{3},$

i

$\ln\frac{1}{2} < 0.$


### Zadanie 58
Dobrać $A$ i $B$ tak, by funkcja

$$F(x) = \begin{cases}
0                      & \text{dla } x \le -1, \\
A + B \cdot \arccos(x) & \text{dla } x \in (-1, 1]. \\
1                      & \text{dla }  > 1.
\end{cases}$$

była dystrybuantą pewnej ciągłej zmiennej losowej $X$. Znaleźć funkcję
gęstości, obliczyć $P(0 < X \le 1)$, $P(X > \frac{1}{2})$.

Rozwiązanie:

Korzystam z własności dystrybuanty:

$$\begin{cases}
1 = A + B\cdot \arccos(1) \\
0 = A + B\cdot \arccos(-1)
\end{cases}$$

Odejmuję stronami:

$1 -0 = A + B \cdot \arccos(1) - A - B\cdot \arccos(-1),$

$1 = B(\arccos(1) - \arccos(-1)) = -\pi B,$

$B = -\frac{1}{\pi},$

$A = -B \cdot \arccos(-1) = \frac{1}{\pi}\cdot \pi = 1$

$$F(x) = \begin{cases}
0                                 & \text{dla } x \le -1, \\
1 - \frac{1}{\pi}\cdot \arccos(x) & \text{dla } x \in (-1, 1]. \\
1                                 & \text{dla } x > 1.
\end{cases}$$

Gęstość:

$$f(x) = \begin{cases}
\frac{1}{\pi\sqrt{1-x^2}} & \text{dla } x \in (-1, 1), \\
0                         & \text{w p.p.}
\end{cases}$$

$P(0 < X \le 1) = P(X \le 1) - P(X < 0) = 1 - 1 + \frac{1}{\pi}\cdot \arccos(0) = \frac{1}{2},$

$P(X > \frac{1}{2}) = 1 - P(X < \frac{1}{2}) = 1 - 1 + \frac{1}{\pi}\cdot \arccos(0.5) = \frac{1}{3}$


### Zadanie 59
Bok prostokąta jest zmienną losową $X$ o rozkładzie jednostajnym na przedziale $[0, 10]$.\
Obliczyć:\
a) $E(X^2)$,\
b) wartość oczekiwaną pola prostokąta, jeśli jego obwód wynosi 20.

Rozwiązanie:

a)

Korzystam z wzorów na wariancję i wartość oczekiwaną rozkładu jednostajnego:

$E(X^2) = D^2(X) + [E(X)]^2 = \frac{(0-10)^2}{12} + (\frac{0 + 10}{2})^2 = \frac{100}{3}.$

b)

Należy obliczyć wartość oczekiwaną zmiennej $Z = XY$, gdzie zmienne $X$ i $Y$ to boki prostokąta, uwzględniając warunek mamy:

$2X + 2Y = 20,$

$X+Y=10,$

$Y = 10 - X,$

$E(Z) = E(XY) = E[X(10-X)] = E(10X-X^2) = 10E(X) - E(X^2) = 10\cdot\frac{10}{2} - \frac{100}{3} = \frac{50}{3}.$

### Zadanie 60
Zmienna $X$ ma gęstość postaci

$$f(x) = \begin{cases}
0       & \text{dla } x < 0, \\ 
xe^{-x} & \text{dla } x \ge 0.
\end{cases}$$

Wyznaczyć dystrybuantę oraz $P(0 < X < \ln2)$.

Rozwiązanie:

$\int_0^t xe^{-x}dx =$\
$= \int_0^t x\left(-e^{-x}\right)'dx$ \
$= \left[-xe^{-x}+\int_0^t e^{-x}dx\right]_0^t$\
$= \left[-xe^{-x} - e^{-x}\right]_0^t$\
$= \left(-te^{-t} - e^{-t}\right) - \left(0e^{-0} - e^{-0}\right)$\
$= 1 - te^{-t} - e^{-t}$

$$F(x) = \begin{cases}
0                    & \text{dla } x < 0, \\
1 - xe^{-x} - e^{-x} & \text{dla } x \ge 0. \\
\end{cases}$$

$P(0 < X < \ln2) = P(X < \ln2) - P(X < 0) = 1 - \ln2 \cdot e^{-\ln2} - e^{-\ln2} = 1 - \frac{1}{2}\ln2 - \frac{1}{2} = \frac{1}{2} - \frac{1}{2}\ln2$









