### Gęstość prawdopodobieństwa funkcji zmiennej losowej

Niech:

$u = u(x, y), \ \ \ v = v(x, y)$

będą funkcjami ciągłymi i różnowartościowymi o ciągłych pochodnych cząstkowych w pewnycm regularnym obszarze płaskim $D$. Załóżmy że powyższe równości, traktowane jako układ równań, mają dokładnie jedno rozwiązanie:

$x = x(u, v), \ y = y(u, v)$

o ciągłych pochodnych cząstkowych oraz, że jakobian:

$$\frac{D(x,y)}{D(u, v)} = 
\begin{vmatrix}
    \frac{dx}{du} & \frac{dx}{dv} \\
    \frac{dy}{du} & \frac{dy}{dv} \\
\end{vmatrix} \ne 0 \ \text{ dla } (u, v) \in \Delta,$$

gdzie $\Delta$ to obszar płaski płaszczyzny $OUV$, na który powyższe wzory przekształcają obszar $D$.

Jeśli gęstość $f$ dwuwymiarowej zmiennej losowej $(X, Y)$ jest ciągła w $D$ poza skończoną liczbą linii, to gęstość $k$ dwuwymiarowej zmiennej losowej $(U, V)$ określonej wzorami:

$U = u(X, Y), \ V = v(X, Y)$

wyraża się wzorem:

$$k(u, v) = \begin{cases}
f[x(u, v), y(u,v)]\left|\frac{D(x,y)}{D(u,v)}\right| & \text{dla $(u, v) \in \Delta$}, \\
0 & \text{dla $(u, v) \notin \Delta$}. \\
\end{cases}$$

### Gęstość sumy, iloczynu, ilorazu zmiennych losowych

# Suma $Z = X + Y$

$f_Z(z) = \int\limits_{-\infty}^\infty f(x, z-x) dx,$

gdy zmienne są niezależne:

$f_Z(z) = \int\limits_{-\infty}^\infty f_X(x) f_Y(z-x) dx.$

# Iloczyn $Z = XY$

$f_Z(z) = \int\limits_{-\infty}^\infty \frac{1}{|x|}f(x, \frac{z}{x}) dx,$

gdy zmienne są niezależne:

$f_Z(z) = \int\limits_{-\infty}^\infty \frac{1}{|x|}f_X(x)f_Y(\frac{z}{x}) dx.$

# Iloraz $Z = \frac{X}{Y}$

$f_Z(z) = \int\limits_{-\infty}^\infty |y|f(zy, y) dy,$

gdy zmienne są niezależne:

$f_Z(z) = \int\limits_{-\infty}^\infty |y|f_X(zy) f_Y(y) dy.$