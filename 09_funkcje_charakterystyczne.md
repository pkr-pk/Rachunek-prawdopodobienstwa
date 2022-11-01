# Funkcja charakterystyczna

Funkcją charakterystyczną zmiennej losowej $X$ nazywamy wartość oczekiwaną funkcji $e^{itX}$, gdzie $t$ jest zmienną rzeczywistą, a $i$ - tzw. jednostką urojoną; oznaczmy tę funkcję przez $\phi(t)$:

$$\forall_{t \in \mathbb{R}} \phi(t) = E(e^{itX}).$$

Korzystając z definicji wartości oczekiwanej można zapisać:

$$\phi(t) = \begin{cases}
\sum\limits_{k}p_ke^{itx_k}                 & \text{dla zmiennej losowej dyskretnej o rozkładzie } P(X = x_k) = p_k, \text{gdzie } \sum_k p_k = 1, \\
\int\limits_{-\infty}^{\infty}e^{itx}f(x)dx & \text{dla zmiennej losowej typu ciągłego o gęstości } f. \\
\end{cases}$$

### Wzór I
Przy założeniu istnienia skończonej całki $\int_{-\infty}^\infty |\phi(t)| dt$, zachodzi wzór:

$$f(x)=F'(x) = \frac{1}{2\pi} \int\limits_{-\infty}^\infty e^{-itx}\phi(t)dt.$$

### Wzór II
Jeśli funkcja charakterystyczna ma okres $2\pi$, to przyjmuje tylko wartości całkowite:

$$\forall_{k \in \mathbb{Z}}p_k = \frac{1}{2\pi}\int\limits_{-\pi}^\pi e^{-itk}\phi(t)dt,$$

gdzie $p_k = P(X = k)$ dla $k = 0, \pm1, \pm2,...,$ oraz $\sum_{k}p_k=1,$ przy czym nie wszystkie $p_k$ muszą być dodatnie.

### Twierdzenie I
Wygodnie jest używać funkcji charakterystycznych do badania rozkładów bo zachodzą następujące zależności:

1. Jeżeli istnieje k-ty moment zmiennej losowej $X$ o funkcji charakterystycznej $\phi$, to $\phi$ jest k-krotnie różniczkowalna (w sposób ciągły) i zachodzi związek: $$E(X^k) = \frac{1}{i^k}\phi^{(k)}(0)$$ oraz jeśli można rozwinąć $\phi(t)$ w szereg Maclaurina, to: $$\phi(t) = \sum_{k=0}^\infty a_k t^k,$$ gdzie: $$a_k = \frac{\phi^{(k)}(0)}{k!}.$$ Dowolny moment zwykły można policzyć z wzoru: $$E(X^k) = \frac{a_kk!}{i^k}.$$

2. Funkcja charakterystyczna sumy dowolnej skończonej liczby niezależnych zmiennych losowych równa się iloczynowi funkcji charakterystycznych tych zmiennych.

### Wzór III
Funkcja charakterystyczna funkcji zmiennej losowej $Y = g(X)$ jest postaci:

$$\phi(t) = \begin{cases}
\sum\limits_{k}p_ke^{itg(x_k)}                 & \text{dla zmiennej losowej dyskretnej o rozkładzie } p_k = P(X = x_k), \\
\int\limits_{-\infty}^{\infty}e^{itg(x)}f(x)dx & \text{dla zmiennej losowej typu ciągłego o gęstości } f. \\
\end{cases}$$

### Tabela z funkcjami charakterystycznymi poszczególnych rozkładów:

|Nazwa rozkładu|Rozkład prawdopodobieństwa &emsp;|Funkcja charakterystyczna|
|---|---|---|
|dwumianowy|$p_k = {n\choose k}p^kq^{n-k},$ <br> $k=0,1,...,n$ <br> $p, q > 0,$ $p+q=1$|$\phi(t) = (pe^{it}+q)^n$|
|ujemny dwumianowy|$p_k = {k-1\choose \nu-1}p^\nu q^{k-\nu},$ <br> $k = \nu, \nu + 1,...$ <br> $p, q >0,$ $p+q=1,$ <br> $\nu \in \mathbb{N}$|$\phi(t) = (\frac{pe^{it}}{1-qe^{it}})^\nu$|
|Poissona|$p_k = \frac{e^{-\lambda}\lambda^k}{k!},$ <br>$k\in\mathbb{N_0},$ $\lambda > 0$|$\phi(t)=\exp[\lambda(e^{it}-1)]$|
|jednostajny|$f(x) = \frac{1}{b-a},$<br>$a < x < b$|$\phi(t) = \frac{1}{b-a}\frac{e^{itb}-e^{ita}}{it}$|
|normalny|$f(x)=\frac{1}{\sigma\sqrt{2\pi}}\exp[-\frac{(x-\mu)^2}{2\sigma^2}],$ <br> $\sigma>0,$ $\mu\in\mathbb{R}$|$\phi(t) = \exp(i\mu t - \frac{\sigma^2t^2}{2})$|
|gamma|$f(x)=\frac{1}{\lambda^p\Gamma(p)}x^{p-1}\exp(-\frac{x}{\lambda}),$<br> $x, \lambda, p > 0$|$\phi(t)=\frac{1}{(1-i\lambda t)^p}$|
|Laplace'a|$f(x) = \frac{1}{2}e^{-\|x\|}$|$\phi(t)=\frac{1}{1+t^2}$|
|Cauchy'ego|$f(x)=\frac{\lambda}{\pi[\lambda^2+(x-\mu)^2]},$<br>$\lambda>0,$ $\mu\in\mathbb{R}$|$\phi(t) = e^{i\mu t-\lambda \|t\|}$|
|wykładniczy|$f(x)=\frac{1}{\lambda}\exp(-\frac{x}{\lambda}),$ <br> $x>0$|$\phi(t) = \frac{1}{1-i\lambda t}$|

# Zadania

### Zadanie 1
Wyznaczyć funkcję charakterystyczną rozkładu: \
a) zero-jedynkowego, \
b) geometrycznego, \
c) dwumianowego, \
d) liczby wyrzuconych orłów przy rzucie trzema monetami, \
e) wykładniczego o gęstości

$$f(x) = \begin{cases}
\frac{1}{\lambda}exp(-\frac{x-a}{\lambda}) & \text{dla } x > a,   \\
0                                          & \text{dla } x \le a, \\
\end{cases}$$

f) Laplace'a o gęstości $f(x) = \frac{1}{2}e^{-|x|}.$

Rozwiązanie:

a) 

Gęstość rozkładu zero-jedynkowego to:

$$p_k = P(X = k) = \begin{cases}
1-p & \text{dla } k=0, \\
p   & \text{dla } k=1, \\
\end{cases}$$

$\phi(t) = \sum\limits_{k} p_k e^{itk} = (1-p)e^{it\cdot0} + pe^{it\cdot 1} = 1-p+pe^{it}.$

b) 

Gęstość rozkładu geometrycznego to:

$p_k = P(X = k) = p(1-p)^{k-1} \text{ dla $k=1, 2, 3,...$}.$

$\phi(t) = \sum\limits_{k} p_k e^{itk} = \sum\limits_{k=1}^\infty p(1-p)^{k-1} e^{itk} = \sum\limits_{k=1}^\infty pe^{it}(1-p)^{k-1} (e^{it})^{k-1} = pe^{it} \sum\limits_{k=1}^\infty [(1-p)e^{it}]^{k-1}.$

Powyżej jest suma szeregu geometrycznego, gdzie $q = (1-p)e^{it}$ co daje:

$\phi(t) = \frac{pe^{it}}{1-(1-p)e^{it}}.$

c)

Gęstość rozkładu dwumianowego to:

$p_k = P(X = k) = {n\choose k}p^kq^{n-k} \text{ dla } k=0, 1, 2,...,n; q= 1-p.$

$\phi(t) = \sum\limits_{k} p_k e^{itk} = \sum\limits_{k=0}^n {n\choose k}p^kq^{n-k}e^{itk} = \sum\limits_{k=0}^n {n\choose k}(pe^{it})^kq^{n-k} = (pe^{it} + q)^n.$

Powyżej skorzystałem z wzoru dwumianowego.

d)

Liczby wyrzuconych orłów przy rzucie trzema monetami to zdarzenia z rozkładu dwumianowego, gdzie $p = q = \frac{1}{2}$. Korzystając z poprzedniego przykadu:

$\phi(t) =  (\frac{1}{2}e^{it} + \frac{1}{2})^3 = \frac{1}{8}(e^{it} + 1)^3.$

e)

$\phi(t) =$

$= \int\limits_{-\infty}^{\infty}e^{itx}f(x) dx$

$= \int\limits_{a}^{\infty} e^{itx} \frac{1}{\lambda} \exp(-\frac{x-a}{\lambda}) dx$

$= \int\limits_{a}^{\infty} \frac{1}{\lambda} \exp\left(itx-\frac{x-a}{\lambda}\right)dx$

$= \int\limits_{a}^{\infty} \frac{1}{\lambda} \exp\left[\frac{x(\lambda it-1) + a}{\lambda}\right]dx$

$= \int\limits_{a}^{\infty} \frac{1}{\lambda} \exp(\frac{a}{\lambda})\exp\left[\frac{x(\lambda it-1) + a}{\lambda}\right]dx$

$= \frac{1}{\lambda} \exp(\frac{a}{\lambda}) \int\limits_{a}^{\infty} \exp\left[\frac{x(\lambda it-1)}{\lambda}\right]dx$

Zbadam istnienie granicy:

$\lim\limits_{N\to\infty} \int\limits_{a}^{\infty} \exp\left[\frac{x(\lambda it-1)}{\lambda}\right]dx =$

$= \lim\limits_{N\to\infty}\left[ \frac{\exp\left[\frac{x(\lambda it-1)}{\lambda}\right]}{\frac{\lambda it-1}{\lambda}}\right]_a^N$

$ = \frac{\lambda}{\lambda it - 1} \lim\limits_{N\to\infty}\left[ \exp\left[\frac{x(\lambda it-1)}{\lambda}\right]\right]_a^N$ 

$= \frac{\lambda}{\lambda it - 1} \lim\limits_{N\to\infty} \exp\left[\frac{N\lambda it-N}{\lambda}\right] - \frac{\lambda}{\lambda it - 1} \exp\left[\frac{a\lambda it-a}{\lambda}\right]$

$= \frac{\lambda}{\lambda it - 1} \lim\limits_{N\to\infty} \exp[-\frac{N}{\lambda}] \exp[N it] - \frac{\lambda}{\lambda it - 1} \exp\left[\frac{a\lambda it-a}{\lambda}\right]$

$= \frac{\lambda}{\lambda it - 1} \lim\limits_{N\to\infty} \exp[-\frac{N}{\lambda}][\cos(Nt)+i\sin(Nt)] - \frac{\lambda}{\lambda it - 1} \exp\left[\frac{a\lambda it-a}{\lambda}\right]$

Pierwszy składnik jest zerem, ponieważ jest to granica iloczynu funkcji, w którym pierwszy czynnik dąży do zera a drugi jest funkcją ograniczoną. Otrzymuję więc:

$\phi(t) =$

$= - \frac{1}{\lambda} \exp\left[\frac{a}{\lambda}\right] \frac{\lambda}{\lambda it - 1} \exp\left[\frac{a\lambda it-a}{\lambda}\right]$

$= \frac{\lambda}{1- \lambda it} \exp\left[\frac{a\lambda it-a}{\lambda}\right] \exp\left[\frac{a}{\lambda}\right]$

$= \frac{\lambda}{1- \lambda it} \exp\left[\frac{a\lambda it-a}{\lambda}+\frac{a}{\lambda}\right] = \frac{e^{ait}}{1- \lambda it}.$

f)

$$|x| = \begin{cases}
-x  & \text{dla } x < 0,   \\
x   & \text{dla } x \ge 0, \\
\end{cases}$$

$\phi(t) =$

$=  \int\limits_{-\infty}^{\infty}e^{itx}f(x) dx$

$= \int\limits_{-\infty}^{0}e^{itx}\frac{1}{2}e^{x} dx + \int\limits_{0}^{\infty}e^{itx}\frac{1}{2}e^{-x} dx $

$= \int\limits_{-\infty}^{0} \frac{1}{2}e^{itx+x}dx + \int\limits_{0}^{\infty}\frac{1}{2}e^{itx-x}dx$

$= \frac{1}{2}\left[ \int\limits_{-\infty}^{0} e^{itx+x}dx + \int\limits_{0}^{\infty}e^{itx-x}dx \right].$

Zbadam istnienie granic:

$\lim\limits_{N\to\infty}\int\limits_{-N}^{0} e^{itx+x}dx + \lim\limits_{M\to\infty}\int\limits_{0}^{M}e^{itx-x}dx =$

$= \lim\limits_{N\to\infty} \left[\frac{e^{itx+x}}{it+1}\right]_{-N}^0 + \lim\limits_{M\to\infty} \left[\frac{e^{itx-x}}{it-1}\right]_0^M$

$ = \frac{1}{it+1} - \lim\limits_{N\to\infty} \frac{e^{-itN-N}}{it+1} + \frac{1}{it-1} - \lim\limits_{M\to\infty} \frac{e^{itM-M}}{it-1}$

$=\frac{1}{it+1} - \lim\limits_{N\to\infty} e^{-N}\frac{\cos(Nt) - i\sin(Nt)}{it+1} + \lim\limits_{M\to\infty} e^{-M}\frac{\cos(Mt) + i\sin(Mt)}{it-1} - \frac{1}{it-1}.$

Drugi i czwarty składnik jest zerem, ponieważ są to granice iloczynu funkcji, w których pierwszy czynnik dąży do zera a drugi jest funkcją ograniczoną. Otrzymuję więc:

$\phi(t) = \frac{1}{2}\left[\frac{1}{it+1} - \frac{1}{it-1}  \right] = \frac{1}{2}\left[\frac{it-1}{i^2t^2-1} - \frac{it+1}{i^2t^2-1}  \right] = \frac{1}{2}\left[\frac{it-1-it-1}{-t^2-1}\right] = \frac{1}{2}\left[\frac{2}{t^2+1}\right] = \frac{1}{t^2+1}$


### Zadanie 2
Zmienna losowa $X$ ma rozkład prawdopodobieństwa o funkcji charakterystycznej $\phi$. Wyznaczyć funkcję charakterystyczną zmiennej: $Y = aX+b$, gdzie $a$, $b$ są dowolnymi liczbami rzeczywistymi $(a \ne 0)$.

Rozwiązanie:

$Y = aX + b,$

$\phi_Y(t) = E[e^{it(aX+b)}] = \int\limits_{-\infty}^\infty e^{it(ax+b)} f(x) dx =  \int\limits_{-\infty}^\infty e^{itax+itb} f(x) dx = e^{itb} \int\limits_{-\infty}^\infty e^{itax} f(x) dx = e^{itb}\phi(at)$

### Zadanie 3
Zmienna losowa $X$ ma rozkład $N(0,1)$, wyznaczyć rozkład zmiennej losowej $Y = X^2$.

Rozwiązanie:

$f(x)=\frac{1}{\sqrt{2\pi}}\exp(-\frac{x^2}{2}),$

$$\phi(t) = E[\exp(itX^2)] = 
\int\limits_{-\infty}^\infty \exp(itx^2) \frac{1}{\sqrt{2\pi}}\exp(-\frac{x^2}{2})dx$$

$$= \frac{1}{\sqrt{2\pi}}\int\limits_{-\infty}^\infty \exp(itx^2-\frac{x^2}{2})dx=
\frac{1}{\sqrt{2\pi}}\int\limits_{-\infty}^\infty \exp(-\frac{(x\sqrt{1-2it})^2}{2})dx$$

$$= \left|\begin{aligned} y = x\sqrt{1-2it} \\ dy = \sqrt{1-2it}dx \end{aligned}\right|=
\frac{1}{\sqrt{2\pi} \sqrt{1-2it}}\int\limits_{-\infty}^\infty \exp(-\frac{y^2}{2})dy$$

$$= \frac{1}{\sqrt{2\pi} \sqrt{1-2it}} \sqrt{2\pi}=
\left(\frac{1}{1-2it}\right)^{\frac{1}{2}}$$

Powyżej skorzystałem z informacji, że całka oznaczona z funkcji Gaussa wynosi $\sqrt{2\pi}$.

Wynik to funkcja charakterystyczna rozkładu gamma o parametrach $\lambda=2$, $p=\frac{1}{2}$, a rozkład gamma z takimi parametrami to rozkład $\chi^2$ z 1 stopniem swobody. Gęstość takiego rozkładu to:

$f(x) = \frac{1}{\sqrt{2}\Gamma(\frac{1}{2})}x^{-\frac{1}{2}}e^{-\frac{x}{2}},$ dla $x>0$.


### Zadanie 4
Wyznaczyć gęstość prawdopodobieństwa zmiennej losowej $X$, o funkcji charakterystycznej postaci:\
a) $\phi(t) = \exp(\frac{t^2}{2}),$\
b) 
$$\phi(t) = \begin{cases}
1-|t| & \text{dla } |t| \le 1,   \\
0     & \text{dla } |t| > 0, \\
\end{cases}$$
c) $\phi(t) = e^{2it-3|t|},$ \
d) $\phi(t) = e^{2it},$ \
e) $\phi(t) = \cos(t),$ \
f) $\sum\limits_{k=1}(\frac{1}{2})^k\cos(kt).$

Rozwiązanie:

a)

Sprawdzam warunek czy mogę skorzystać z wzoru nr I:

$\int\limits_{-\infty}^\infty \left|\exp(-\frac{t^2}{2})\right|dt = \sqrt{2\pi} < \infty.$

Warunkek jest spełniony więc korzystam z wzoru nr I:

$$f(x) = \frac{1}{2\pi}\int\limits_{-\infty}^\infty \exp(-itx)\exp(-\frac{t^2}{2})dt =
\frac{1}{2\pi}\int\limits_{-\infty}^\infty exp(-itx - \frac{t^2}{2})dt$$

$$= \frac{1}{2\pi}\int\limits_{-\infty}^\infty exp[-\frac{1}{2}t(ix + ix + t)]dt =
\left|\begin{aligned} u = t + ix \\ du = dt \end{aligned}\right|$$

$$=\frac{1}{2\pi}\int\limits_{-\infty}^\infty exp[-\frac{1}{2}(u - ix)(u + ix)]du =
\frac{1}{2\pi}\int\limits_{-\infty}^\infty exp[-\frac{1}{2}(u^2 +x^2)]du$$

$$=\frac{1}{2\pi}\exp(-\frac{x^2}{2}) \int\limits_{-\infty}^\infty exp(-\frac{u^2}{2})du =
\frac{1}{2\pi}\exp(-\frac{x^2}{2}) \sqrt{2\pi} =
\frac{1}{\sqrt{2\pi}}\exp(-\frac{x^2}{2})$$

b)

Sprawdzam warunek czy mogę skorzystać z wzoru nr I:

$$|1-|t|| = \begin{cases}
1-|t| & \text{dla } -1 < t < 1, \\
|t|-1 & \text{w p.p.},          \\
\end{cases}$$

$$|t| = \begin{cases}
-t & \text{dla } t < 0,   \\
t  & \text{dla } t\ge0, \\
\end{cases}$$

$\int\limits_{-1}^1 |1-|t||dt =$

$\int\limits_{-1}^1 1-|t|dt$

$= \int\limits_{-1}^0 (1+t)dt + \int\limits_0^1 (1-t)dt$

$= (t+\frac{t^2}{2})\bigr|_{-1}^0 + (t-\frac{t^2}{2})\bigr|_0^1$

$= 0+0+1-\frac{1}{2}+1--\frac{1}{2}-0+0=1<\infty.$

Warunek jest spełniony więc korzystam z wzoru nr I:

$f(x) = $

$= \frac{1}{2\pi}\int\limits_{-1}^1 \exp(-itx) (1-|t|) dt$

$= \frac{1}{2\pi}\left[\int\limits_{-1}^0 \exp(-itx) (1+t) dt  + \int\limits_{0}^1 \exp(-itx) (1-t) dt\right]$

$= \frac{1}{2\pi}\left[\frac{ix - e^{ix} + 1}{x^2} - \frac{ix + e^{ix} -1}{x^2}\right]$

$= \frac{1}{2\pi}\left[\frac{-e^{ix} + 1 -  e^{ix} +1}{x^2} \right]$

$= \frac{1}{2\pi}\left[\frac{2 - 2 \frac{e^{ix} + e^{ix}}{2}}{x^2} \right]$

$= \frac{1}{2\pi}\left[\frac{2 - 2\cos(x)}{x^2} \right]$

$= \frac{1 - \cos(x)}{\pi x^2}$

c)

Sprawdzam warunek na zastosowanie wzoru nr I:

$|\phi(t)|=|e^{2it-3|t|}| = e^{-3|t|}|\cos(2t) + i\sin(2t)| = e^{-3|t|},$

$\int\limits_{-\infty}^\infty e^{-3|t|} dt = 2\int\limits_0^\infty e^{-3t} dt=\frac{2}{3} <\infty.$

Warunek jest spełniony więc można użyć wzoru nr I:

$f(x) = \frac{1}{2\pi}\int\limits_{-\infty}^\infty e^{-itx+2it-3|t|}dt.$

W całce pojawiają się nieskończoności więc należy zbadać istnienie granic:

$\lim\limits_{N\to\infty} \int\limits_{-N}^0 e^{-itx + 2it + 3t} dt + \lim\limits_{M\to\infty} \int\limits_0^M e^{-itx + 2it - 3t} dt =$

$= \lim\limits_{N\to\infty} \left[\frac{e^{3t + 2it + itx}}{3+2i-ix} \right]_{-N}^0 + \lim\limits_{M\to\infty} \left[\frac{e^{-3t + 2it - itx}}{-3+2i-ix} \right]_0^M$

$= \frac{1}{3+2i-ix} - \lim\limits_{N\to\infty} \frac{e^{-3N - 2iN - iNx}}{3+2i-ix} + \lim\limits_{M\to\infty} \frac{e^{-3M + 2iM - iMx}}{-3+2i-ix} - \frac{1}{-3+2i-ix}$

$= \frac{1}{3+2i-ix} - \lim\limits_{N\to\infty} e^{-3N} \frac{e^{-2iN - iNx}}{3+2i-ix} + \lim\limits_{M\to\infty} e^{-3M}\frac{e^{2iM - iMx}}{-3+2i-ix} - \frac{1}{-3+2i-ix}$

$= \frac{1}{3+2i-ix} - \lim\limits_{N\to\infty} e^{-3N} \frac{\cos(-2N - Nx) + i\sin(-2N - Nx)}{3+2i-ix} + \lim\limits_{M\to\infty} e^{-3M}\frac{\cos(2M-Mx) + i\sin(2M-Mx)}{-3+2i-ix} - \frac{1}{-3+2i-ix}$

Drugi i trzeci składnik jest zerem, ponieważ są to granice iloczynu funkcji, w których pierwszy czynnik dąży do zera a drugi jest funkcją ograniczoną. Otrzymuję więc:

$f(x) =$ 

$= \frac{1}{2\pi}\left(\frac{1}{3+2i-ix} - \frac{1}{-3+2i-ix}\right)$

$= \frac{1}{2\pi}\left[\frac{1}{i(2-x)+3} - \frac{1}{i(2-x)-3}\right]$

$= \frac{1}{2\pi}\left[\frac{i(2-x)-3}{i^2(2-x)^2-9} - \frac{i(2-x)+3}{i^2(2-x)^2-9}\right]$

$= \frac{1}{2\pi}\left[\frac{i(2-x) - 3 - i(2-x) - 3}{-(2-x)^2-9}\right]$

$= \frac{1}{\pi}\frac{3}{(2-x)^2+9}.$

Jest to gęstość rozkładu Cauchy'ego o parametrach $\mu = 2$, $\lambda=3$.

d)

Ponieważ $|\phi(t)| = 1$, więc nie istnieje całka skończona $\int\limits_{-\infty}^\infty|\phi(t)|dt$ i nie można skorzystać z wzoru nr I. Ponieważ $e^{2it}$ jest funkcją okresową, więc zmienna losowa jest typu skokowego. Korzystam więc z definicji funkcji charakterystycznej:

$\sum\limits_k p_ke^{itx_k} \equiv e^{2it},$ 

gdzie $p_k = P(X = x_k).$ 

Ponieważ funkcja charakterystyczna zmiennej losowej wyznacza rozkład jednoznacznie, to lewa strona powyższej tożsamości musi być równa prawej stronie. Jest to prawdą gdy:

$p_k = 1,$ 

$x_k = 2.$

Szukany rozkład to rozkład jednopunktowy:

$P(X = 2) = 1.$

e)

Nie istnieje całka skończona $\int\limits_{-\infty}^\infty|\phi(t)|dt$ i nie można skorzystać z wzoru nr I. Ponieważ $\cos(t)$ jest funkcją okresową, więc zmienna losowa jest typu skokowego. Korzystam więc z definicji funkcji charakterystycznej oraz z informacji o wzorze nr II: $x_k = 0, \pm 1, \pm 2, ...$ i $\sum_k p_k = 1$. Mam:

$\sum\limits_k p_ke^{itx_k} \equiv \cos(t),$ gdzie $p_k = P(X = x_k).$

$p_k(e^{itx_k} + e^{-itx_k}) \equiv \cos(t)$

$2p_k \cos(tx_k) \equiv \cos(t)$

Wynika z tego, że:

$x_k = 1 \vee x_k = -1,$

$p_k = \frac{1}{2}.$

Szukany rozkład prawdopodobieństwa to:

$P(X = -1) = \frac{1}{2},$ $P(X = 1) = \frac{1}{2}.$

f)

Nie istnieje całka skończona $\int\limits_{-\infty}^\infty|\phi(t)|dt$ i nie można skorzystać z wzoru nr I. Ponieważ $\cos(t)$ jest funkcją okresową, więc zmienna losowa jest typu skokowego. Korzystam więc z definicji funkcji charakterystycznej oraz z informacji o wzorze nr II: $x_k = 0, \pm 1, \pm 2, ...$ i $\sum_k p_k = 1$. Mam:

$\sum\limits_k p_ke^{itx_k} \equiv \sum\limits_{k=1}(\frac{1}{2})^k\cos(kt),$ gdzie $p_k = P(X = x_k).$

$p_k(e^{itx_k} + e^{-itx_k}) \equiv (\frac{1}{2})^k\cos(kt)$

$2p_k \cos(tx_k) \equiv (\frac{1}{2})^k\cos(kt)$

Wynika z tego, że:

$x_k = k \vee x_k = -k,$

$p_k = \frac{1}{2}(\frac{1}{2})^k.$

Szukany rozkład prawdopodobieństwa to:

$P(X = k) = \frac{1}{2}(\frac{1}{2})^{|k|},$ dla $k\in\mathbb{Z}-\{0\}.$

### Zadanie 5
Wyznaczyć za pomocą funkcji charakterystycznych:\
a) drugi moment zwykły rozkładu Poissona,\
b) trzeci moment zwykły rozkładu dwumianowego, \
c) czwarty moment zwykły rozkładu $N(0, 1)$, \
d) k-ty moment zwykły rozkładu wykładniczego, o gęstości $f(x) = \frac{1}{\lambda}\exp(-\frac{x}{\lambda})$ dla $x>0$, $\lambda>0$,\
e) k-ty moment zwykły dwuparametrowego rozkładu gamma o gęstości $f(x) = \frac{a^p}{\Gamma(p)}x^{p-1}e^{-ax}$ dla $x>0$, $a, p >0$.

Rozwiązanie:

W rozwiązaniach skorzystam z twierdzenia nr I.

a)

$\phi(t) = e^{\lambda(e^{it}-1)},$

$\phi'(t) = \lambda i e^{it} e^{\lambda(e^{it}-1)},$

$\phi''(t) = -\lambda^2 e^{2it} e^{\lambda(e^{it}-1)} -\lambda e^{it} e^{\lambda(e^{it}-1)},$

$\phi''(0) = -\lambda^2-\lambda$

$EX^2 = \frac{1}{i^2}(-\lambda^2 - \lambda) = \lambda^2 + \lambda$

b)

$\phi(t) = (pe^{it}+q)^n,$

$\phi'(t) = inpe^{it}(e^{i t}p + q)^{n-1},$

$\phi''(t) = -npe^{it}(e^{it}p + q)^{n-1} - (n-1)np^2e^{2it}(e^{it}p + q)^{n-2}$

$\phi'''(t) = -inpe^{it}(e^{it}p + q)^{n-1}-3in(n-1)p^2e^{2it}(e^{it}p + q)^{n-2} - in(n-1)(n-2)p^3e^{3it}(e^{it}p + q)^{n-3}$

$\phi'''(0) = -inp(p + q)^{n-1}-3in(n-1)p^2(p + q)^{n-2} - in(n-1)(n-2)p^3(p + q)^{n-3},$

ponieważ $q = 1 - p$ to:

$\phi'''(0) = -inp - 3in(n-1)p^2 - in(n-1)(n-2)p^3 = -inp[1 + 3(n-1)p + (n-1)(n-2)p^2].$

$EX^3 = -\frac{1}{i^3}inp[1 + 3(n-1)p + (n-1)(n-2)p^2] = np[1 + 3(n-1)p + (n-1)(n-2)p^2]$

c)

$\phi(t) = \exp(-\frac{t^2}{2}),$

$\phi'(t) = -t\exp(-\frac{t^2}{2}),$

$\phi''(t) = (t^2 - 1) \exp(-\frac{t^2}{2}),$

$\phi'''(t) = (-t^3 + 3t) \exp(-\frac{t^2}{2}),$

$\phi^{(4)}(t) = (t^4 - 6t^2 + 3) \exp(-\frac{t^2}{2}),$

$\phi^{(4)}(0) = 3,$

$EX^4 = \frac{1}{i^4}3 = 3.$

Druga metoda:

Jeżeli znamy rozwinięcie funkcji eksponent w szereg Maclaurina to możemy w szybki sposób wyznaczyć k-ty moment zwykły danego rozkładu.

$\exp(t) = \sum\limits_{k=0}^\infty \frac{t^k}{k!}$ dla $r\in\mathbb{R},$

$\exp(-\frac{t^2}{2}) = \sum\limits_{k=0}^\infty \frac{\left(-\frac{t^2}{2}\right)^k}{k!} = 
\sum\limits_{k=0}^\infty \frac{\left(-1\right)^k t^{2k}}{2^k k!}$ dla $r\in\mathbb{R},$

Zgadnie z twierdzeniem I:

$a_{2k} = \frac{\left(-1\right)^k}{2^k k!}$ dla $k\in\mathbb{N_0},$ 

$EX^{2k} = \frac{\left(-1\right)^k (2k)!}{2^k k! i^{2k}} = \frac{(2k)!}{2^k k!}$ dla $k\in\mathbb{N}.$

Dla $k=2$ mamy $EX^4 = 3.$

d)

Wyznaczę $\phi^{(k)}(t)$:

$\phi(t) = (1-\lambda it)^{-1}$

$\phi'(t) = \lambda i(1-\lambda it)^{-2},$

$\phi''(t) = 2 \lambda^2 i^2 (1-\lambda it)^{-3},$

$\phi'''(t) = 6 \lambda^3 i^3 (1-\lambda it)^{-4},$

wynika stąd:

$\phi^{(k)}(t) = k! \lambda^k i^k (1-\lambda it)^{-k-1},$

$\phi^{(k)}(0) = k! \lambda^k i^k,$

$EX^k = \frac{k! \lambda^k i^k}{i^k} = \lambda^k k!,$ $k\in\mathbb{N}.$

e)

Wyznaczę $\phi^{(k)}(t)$:

$\phi(t) = (1-\frac{it}{a})^{-p},$

$\phi'(t) = p\frac{i}{a}(1-\frac{it}{a})^{-p-1},$

$\phi''(t) = p(p+1)\left(\frac{i}{a}\right)^2(1-\frac{it}{a})^{-p-2},$

$\phi'''(t) = p(p+1)(p+2)\left(\frac{i}{a}\right)^3(1-\frac{it}{a})^{-p-3},$

wynika stąd:

$\phi^{(k)}(t) = p(p+1)(p+2) \dots (p+k-1)\left(\frac{i}{a}\right)^k(1-\frac{it}{a})^{-p-k},$

$\phi^{(k)}(0) = p(p+1)(p+2) \dots (p+k-1)\left(\frac{i}{a}\right)^k,$

$EX^k = \frac{1}{i^k} \frac{p(p+1)(p+2) \dots (p+k-1)i^k}{a^k} = \frac{p(p+1)(p+2) \dots (p+k-1)}{a^k},$ $k\in\mathbb{N}.$





