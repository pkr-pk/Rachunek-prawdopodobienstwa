# Schemat Bernoulliego
W schemacie Bernoulliego prawdopodobieństwo uzyskania $k$ sukcesów w $n$ próbach można obliczyć ze wzoru:
$$P_n(k)={n \choose k} p^k (1−p)^{n−k},$$
gdzie $p$ - to prawdopodobieństwo sukcesu w jednej próbie.

###Prawo małych liczb Poissona
Dla dużego $n$ oraz małego $p$ rozkład Bernoulliego $B(n, p)$ (rozkład ten opisuje schemat Bernoulliego) może zostać przybliżony rozkładem Poissona $Pois(np)$.

###Funkcja rozkładu Poissona

$$f(k,\lambda )={\frac {\lambda ^{k}e^{-\lambda }}{k!}},$$

gdzie:

$k$ - liczba wystąpień zdarzenia\
$\lambda$ -  dodatnia liczba rzeczywista, równa oczekiwanej liczbie zdarzeń w danym przedziale czasu.

# Zadania

### Zadanie 1
50% uczniów ma w domu komputer. Oblicz prawdopodobieństwo, że wśród 7-miu losowo wybranych uczniów:\
a) 5-ciu ma w domu komputer,\
b) co najmniej dwóch uczniów na w domu komputer.

Rozwiązanie:

a)\
$P_7(5) = {7 \choose 5}0.5^5(1-0.5)^2 = \frac{21}{128} \approx 0.16$

b)\
Można to łatwo obliczyć odejmując od 1 sumę prawdopodobieństw tego że 0 lub 1 uczeń będzie miał komputer.

Rozwiązanie w pythonie używając funkcji gęstości prawdopodobieństwa rozkładu dwumianowego (Bernoulliego):

```python
import scipy.stats as st

p = 1 - st.binom.pmf(0, 7, 0.5) - st.binom.pmf(1, 7, 0.5)
print('Szukane prawdopodobieństwo:', p)
```

### Zadanie 2
Firma zakupiła 3 drukarki. Prawdopodobieństwo awarii drukarki w okresie gwarancji wynosi 0.1. Oblicz prawdopodobieństwo, że:\
a) żadna z trzech drukarek pracujących nie ulegnie awarii,
b) nie więcej niż 2 drukarki ulegną awarii.

Rozwiązanie:

```python
import scipy.stats as st

# a)
p_a = st.binom.pmf(0, 3, 0.1)
print('Szukane prawdopodobieństwo w a):', p_a)

# b)
p_b = 1 - st.binom.pmf(3, 3, 0.1) - st.binom.pmf(0, 3, 0.1)
print('Szukane prawdopodobieństwo w b):', p_b)
```

### Zadanie 3
Dziesięciu wyborowych strzelców celuje do lecącego samolotu. Prawdopodobieństwo trafienia samolotu dla każdego z nich jest stałe i wynosi p. Obliczyć prawdopodobieństwo tego, ze samolot zostanie trafiony (niekoniecznie 1 raz).

Rozwiązanie:

Należy obliczyć prawdopodobieństwo, że samolot nie zostanie trafiony i odjąc je od 1:

$P = 1 - {10 \choose 0} p^0 (1 - p)^{10} = 1 - (1 - p)^{10}$

### Zadanie 4
Rzucamy 5 razy moneta symetryczna. Jakie jest prawdopodobieństwo trzykrotnego wyrzucenia orła?

Rozwiązanie:

```python
import scipy.stats as st

p = st.binom.pmf(3, 5, 0.5)
print('Szukane prawdopodobieństwo:', p)
```

### Zadanie 5
Prawdopodobieństwo zajścia zdarzenia A w każdym doświadczeniu jest równe 0.2. Obliczyć
prawdopodobieństwo, że w ciągu 9 niezależnych doświadczeń zdarzenie A zajdzie 6 razy
w dowolnej kolejności.

Rozwiązanie:

```python
import scipy.stats as st

p = st.binom.pmf(6, 9, 0.2)
print('Szukane prawdopodobieństwo:', p)
```

### Zadanie 6
Prawdopodobieństwo trafienia do tarczy w pojedynczym strzale wynosi 0.25. Jakie jest prawdopodobieństwo, że na 6 strzałów 2 będą trafione?

Rozwiązanie:

```python
import scipy.stats as st

p = st.binom.pmf(2, 6, 0.25)
print('Szukane prawdopodobieństwo:', p)
```

### Zadanie 7
Rzucamy trzykrotnie symetryczna moneta. Niech zdarzenie $A$ polega na tym, ze wypadła
co najmniej jedna reszka, a zdarzenie $B$, ze wypadły same reszki. Znaleźć $P(A \cup B)$ oraz $P(A \cap B)$.

Rozwiązanie:

Obliczam $P(A)$ czyli różnicę 1 i tego, że wypadły 3 orły:

$P(A) = 1 - {3 \choose 3} 0.5^{3} = 1 - \frac{1}{8} = \frac{7}{8}.$

Obliczam $P(B)$:

$P(A) = {3 \choose 3} 0.5^{3} = \frac{1}{8}.$

Ponieważ w zbiorze $B$ znajdują się jedno zdarzenie elementarne składające się z samych reszek a w zbiorze $A$ również jest takie zdarzenie to:

$P(A \cap B) = P(B) = \frac{1}{8},$

$P(A \cup B) = P(A) + P(B) - P(A \cap B) = \frac{7}{8} +\frac{1}{8} - \frac{1}{8} = \frac{7}{8}.$

### Zadanie 8
Zmienna losowa $X$ ma rozkład $B(50, 0.1)$. Obliczyć $P(X = 5)$. Wynik dokładny porównać z wartością przybliżoną uzyskaną z prawa małych liczb Poissona.

Rozwiązanie:

```python
import scipy.stats as st

p_b = st.binom.pmf(5, 50, 0.1)
print('Szukane prawdopodobieństwo:', p_b)

p_p = st.poisson.pmf(5, 0.1*50)
print('Prawo małych liczb:', p_p)
```