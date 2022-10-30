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
a \ cos(x) & \text{dla $-\frac{\pi}{2} \le x < \frac{\pi}{2}$}, \\
0   & \text{w p.p.}  
\end{cases}$$

była gęstością pewnej zmiennej losowej $X$. Znaleźć dystrybuantę, obliczyć $E(X)$, $D^2(X)$, $P(|X| > \frac{\pi}{6})$, $P(X ­ \ge \frac{\pi}{3})$, $P(−\frac{\pi}{6} < X \le \frac{\pi}{2})$ oraz medianę i modę $X$.

Rozwiązanie:

$1 = a\int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} cos(x) dx = 2a,$

$a = \frac{1}{2}.$

Dystrybuanta:

$\frac{1}{2} \int_{-\frac{\pi}{2}}^t cos(x) dx = \frac{1}{2}(sin(t)+1),$

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

$F(x) = \frac{1}{\pi} \int_{-\infty}^t \frac{dx}{1 + x^2} = \frac{1}{\pi}\arctg(x)\bigr|_{-\infty}^t = \frac{1}{\pi}(\arctg(t) + \frac{\pi}{2}) \ \text{dla } t \in \mathbb{R}$

$E(X) = \frac{1}{\pi} \int_{-\infty}^\infty \frac{xdx}{1 + x^2} = \left|\begin{aligned} t = x^2 \\ 2xdx = dt \end{aligned}\right| = \frac{1}{2\pi} \int_{\infty}^\infty \frac{xdx}{1 + t} = \frac{1}{2\pi} \ln(1 + t)\biggr|_\infty^\infty = \infty - \infty,$

czyli wartość oczekiwana nie istnieje.

$P(0 < X \le 1) = P(X \le 1) - P(X < 0) = \frac{1}{\pi}(\arctg(1) + \frac{\pi}{2}) - \frac{1}{\pi}(\arctg(0) + \frac{\pi}{2}) = \frac{1}{4},$

$P(3X − 1 > \sqrt{3} − 1) = P(3X > \sqrt{3}) = 1 - P(X < \frac{\sqrt{3}}{3}) = 1 - \frac{1}{\pi}(\arctg(\frac{\sqrt{3}}{3}) + \frac{\pi}{2}) = \frac{1}{3},$

$P(0 < X < \sqrt{3}) = P(X < \sqrt{3}) - P(X < 0) = \frac{1}{\pi}(\arctg(\sqrt{3}) + \frac{\pi}{2}) - \frac{1}{\pi}(\arctg(0) + \frac{\pi}{2}) = \frac{1}{3}.$

Mediana:

$P(X < m) = 0.5,$

$\frac{1}{\pi}(\arctg(m) + \frac{\pi}{2}) = \frac{1}{2},$

$\arctg(m) + \frac{\pi}{2} = \frac{\pi}{2},$

$\arctg(m) = 0,$

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

$\int_0^t xe^{-\frac{x^2}{2}}dx = \left|\begin{aligned} z = \frac{x^2}{2} \\ dz = xdx\end{aligned}\right| = \int_0^{t} e^{-z}dz = -e^{-z}\bigr|_0^t = -e^{-\frac{x^2}{2}}\bigr|_0^t = -(e^{-\frac{t^2}{2}} - e^{-\frac{0}{2}}) = 1 - e^{-\frac{t^2}{2}},$

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