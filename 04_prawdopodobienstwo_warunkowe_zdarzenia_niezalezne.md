# Prawdopodobieństwo warunkowe
Prawdopodobieństwo warunkowe zajścia zdarzenia A pod warunkiem zajścia zdarzenia B liczymy ze wzoru:
$$P(A|B) = \frac{P(A \cap B)}{P(B)}.$$

* Zasada:

$$P(A_1∩A_2∩⋯∩A_n)=P(A_1)P(A_2|A_1)P(A_3|A_2,A_1)...P(A_n|A_{n−1}A_{n−2}...A_1)$$

## Zdarzenia niezależne
Zdarzenia $A$ i $B$ są niezależne gdy:

$$P(A \cap B) = P(A)P(B)$$

# Zadania

### Zadanie 1

Niech $A_i, i = 0,1,2$ oznacza zdarzenie, że losowo wybrany kierowca ma $i$ szkód komunikacyjnych w okresie 5 lat jazdy, a $B$ oznacza zdarzenie, że ma więcej niż 2 szkody komunikacyjne w okresie 5 lat jazdy. Niech $P(A_0)=0.9$, $P(A_1)=0.05$, $P(A_2)=0.03$, $P(B)=0.02$. Oblicz prawdopodobieństwo warunkowe, że kierowca:\
a) miał 1 szkodę, jeżeli wiadomo, że nie miał więcej niż 2 szkody,\
b) miał 2 szkody, jeżeli wiadomo, że miał jakąkolwiek szkodę.

Rozwiązanie:

Należy skorzystać z wzoru na prawdopodobieństwo warunkowe.

a)

C = {"nie więcej niż dwie szkody"},

$P(C) = P(A_0) + P(A_1) + P(A_2) = 0.9 + 0.05 + 0.03 = 0.98$

$P(A_1 \cap C) = P(A_1) = 0.98$

$P(A_1 | C) = \frac{P(A_1 \cap C)}{P(C)} = \frac{0.05}{0.98} \approx 0.05$

b)

C = {"jakakolwiek szkoda"},

$P(C) = 1 - P(A_0) = 1 - 0.9 = 0.1$

$P(A_2 \cap C) = P(A_2) = 0.03$

$P(A_2 | C) = \frac{P(A_2 \cap C)}{P(C)} = \frac{0.03}{0.1} = 0.3$

### Zadanie 2
Wiadomo, że $P(A) = 0.7$, $P(B') = 0.8$, $P(A|B) = 0.6$. Oblicz $P(A \cup B)$.

Rozwiązanie:

$P(A|B) = \frac{P(A \cap B)}{P(B)},$

$P(A \cap B) = P(A) + P(B) - P(A \cup B),$

$P(A|B)\cdot P(B) = P(A) + P(B) - P(A \cup B),$

$P(A \cup B) = P(A) + P(B) - P(A|B)\cdot P(B) = 0.7 + 0.2 - 0.6 \cdot 0.2 = 0.78$

### Zadanie 3
Prawdopodobieństwo awarii sieci komputerowej w losowo wybranym dniu tygodnia wynosi 0.05. Awarie są zdarzeniami niezależnymi.\
a) Oblicz prawdopodobieństwo, że w wybranym tygodniu zdarzą się awarie w czwartek i piątek.\
b) Oblicz prawdopodobieństwo, że w tygodniu wystąpi awaria w co najmniej jednym dniu.\
c) Oblicz prawdopodobieństwo warunkowe, że wystąpią awarie w mniej niż trzech dniach, jeżeli wiadomo, że awaria wystąpiła w ciągu tygodnia.

Rozwiązanie:

```python
import scipy.stats as st

# a)
p_a = 0.05**2 * 0.95**5 
print('a) Szukane prawdopodobienstwo:', p_a)

# b)
p_b = 1 - 0.95**7 
print('b) Szukane prawdopodobienstwo:', p_b)
```

c)\
$A$ - awaria w mniej niż 3 dniach,

$B$ - awaria w ciągu tygodnia.

$P(A \cap B) = P(X=1) + P(X=2).$

```python
import scipy.stats as st

p_ab = st.binom.pmf(1, 7, 0.05) + st.binom.pmf(2, 7, 0.05)
p_b = p_b = 1 - 0.95**7

print('Szukane prawdopodobienstow: ', p_ab / p_b)
```

### Zadanie 4
W urnie znajduje się 6 kul czarnych i 4 białe. Wyciągamy losowo dwa razy po jednej kuli:\
a) ze zwrotem kuli do urny po pierwszym wyjęciu,\
b) bez zwrotu.\
Obliczyć prawdopodobieństwo, ze druga wylosowana kula będzie biała, jeśli wiadomo, że
pierwsza wylosowana była biała.

Rozwiązanie:

$A$ - pierwsza wylosowana kula jest biała,

$B$ - druga wylosowana kula jest biała,

$A \cap B$ - pierwsza i druga wylosowana kula jest biała.

a)\
$P(A) = \frac{4}{10} = \frac{2}{5},$

$P(A \cap B) = \frac{4}{10} \cdot \frac{4}{10} = \frac{4}{25}$

$P(B|A) = \frac{\frac{4}{25}}{\frac{2}{5}} = \frac{2}{5} = 0.4.$

b)\
$P(A) = \frac{4}{10} = \frac{2}{5},$

$P(A \cap B) = \frac{4}{10} \cdot \frac{3}{9} = \frac{2}{15}$

$P(B|A) = \frac{\frac{2}{15}}{\frac{2}{5}} = \frac{1}{3} \approx 0.33.$

### Zadanie 5
Z liczb 2, 3, 15, 30 losujemy jedna liczbę. Sprawdzić, czy zdarzenia:\
$A$ - wylosowana liczba jest podzielna przez 2,\
$B$ - wylosowana liczba jest podzielna przez 3\
są niezależne.

Rozwiązanie:

$A = \{2, 30\},$

$B = \{3, 15, 30\},$

$A \cap B = \{30\},$

$P(A \cap B) = \frac{1}{4} \ne \frac{2}{4} \cdot \frac{3}{4} = \frac{3}{8} = P(A)P(B)$

Zdarzenia nie są niezależne.

### Zadanie 6
Rzucamy dwa razy kostka do gry. Niech $A$ oznacza zdarzenie „suma wyrzuconych oczek równa się 8”, zaś $B$ zdarzenie „w pierwszym rzucie wypadło 6 oczek”. Ustalić, czy zdarzenia $A$ i $B$ są niezależne.


Rozwiązanie:

$A = \{(2, 6), (3, 4), (4, 4), (5, 3), (6, 2)\},$

$B = \{(6, 1),(6,2),(6,3),(6,4),(6,5),(6,6)\},$

$A \cap B = \{(6, 2)\},$

$P(A \cap B) = \frac{1}{36} \ne \frac{5}{36} \cdot \frac{6}{36} = \frac{5}{216} = P(A)P(B)$

Zdarzenia nie są niezależne.

### Zadanie 7
Z talii 52 kart wyciągamy losowo jedną. Czy zdarzenia:\
$A$ - wyciągnięcie asa,\
$B$ - wyciągnięcie karty koloru czerwonego\
są niezależne?



Rozwiązanie:

Asów w talii jest 4 więc moc zbioru $A$ to:

$|A| =4,$

Karty mogą być czerwone lub czarne więc mac zbioru $B$:

$|B| = 26,$

Są dwa czerwone asy więc:

$|A \cap B| = 2,$

$P(A \cap B) = \frac{2}{52} = \frac{1}{26} = \frac{4}{52} \cdot \frac{26}{52} = \frac{1}{26} = P(A)P(B)$

Zdarzenia są niezależne.

### Zadanie 8
Prawdopodobieństwo, ze cena pewnego towaru pójdzie jutro w górę wynosi 0.3, a prawdopodobieństwo, że cena srebra pójdzie w górę wynosi 0.2. Wiadomo ponadto, ze w 6%
przypadków obie ceny - towaru i srebra idą w górę. Czy cena towaru i cena srebra są
niezależne?


Rozwiązanie:

$T$ - zdarzenie polegające na tym, że cena towaru idzie w górę,

$S$ - zdarzenie polegające na tym, że cena srebra idzie w górę,

$P(T) = 0.3,$

$P(S) = 0.2,$

$P(T \cap S) = 0.06,$

$P(T \cap S) = 0.06 = 0.3 \cdot 0.2 = 0.06 = P(T)P(S)$

Zdarzenia są niezależne.
