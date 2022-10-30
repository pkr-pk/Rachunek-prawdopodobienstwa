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

