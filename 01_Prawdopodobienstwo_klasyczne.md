# Prawdopodobieństwo klasyczne

Wzór na prawdopodobieństwo klasyczne:

$$P(A)=\frac{|A|}{|\Omega|},$$

gdzie:

$|A|$ - to liczba zdarzeń sprzyjających (moc zbioru $A$),

$|\Omega|$ - to liczba wszystkich możliwych zdarzeń (moc zbioru $\Omega$).

## Własności prawdopodobieństwa

- Prawdopodobieństwo dowolnego zdarzenia losowego $A$ jest zawsze liczbą z przedziału $[0, 1]$: 

$$0 \le P(A) \le 1.$$

- Prawdopodobieństwo zdarzenia pewnego jest równe 1.

$$P(\Omega) = 1.$$

- Prawdopodobieństwo zdarzenia niemożliwego jest równe 0.

$$P(\emptyset) = 0.$$

## Przydatne wzory

* Prawdopodobieństwo zdarzenia przeciwnego:

$$P(A′) = 1 − P(A).$$

* Prawdopodobieństwo sumy zdarzeń:

$$P(A \cup B) = P(A) + P(B) − P(A \cap B).$$
      
Ogólnie:

$$P\left(\bigcup\limits_{i=1}^n A_i\right) = 
\sum\limits_{i=1}^nP(A_i) - $$


$$\sum\limits_{i < j} P(A_i \cap A_j) +$$

$$\sum\limits_{i < j < k} P(A_i \cap A_j \cap A_k) - ... +$$

$$(-1)^{n-1}P\left(\bigcap\limits_{i=1}^n A_i\right)$$

* Prawa De Morgana:

$$(A_1 \cup A_2 \cup ... \cup A_n)' = A_1' \cap A_2' \cap ... \cap A_n',$$

$$(A_1 \cap A_2 \cap ... \cap A_n)' = A_1' \cup A_2' \cup ... \cup A_n'.$$

* Prawo dystrybucji:

$$A \cap (B \cup C) = (A \cap B) \cup (A \cap C),$$

$$A \cup (B \cap C) = (A \cup B) \cap (A \cup C).$$

## Kombinatoryka

* Kombinacja pozwala policzyć na ile sposobów można wybrać k elementów z n-elementowego zbioru. Wzór na kombinację jest następujący:
$$C^k_n = \frac{n!}{k!(n − k)!}.$$

Kombinacje zapisujemy krótko za pomocą symbolu Newtona:

$${n \choose k} = \frac{n!}{k!(n − k)!}.$$

* Kombinacje z powtórzeniami pozwala policzyć na ile sposobów można wybrać k-elementowy multizbiór złożony z elementów danego zbioru n-elementowego. Liczba k-elementowych kombinacji z powtórzeniami zbioru n-elementowego wyraża się wzorem:

$$\bar{C}_n^k = {k + n - 1 \choose k} = \frac{(k + n - 1)!}{k!(n-1)!}$$

* Permutacja bez powtórzeń zbioru n-elementowego to dowolny n-wyrazowy ciąg utworzony ze wszystkich elementów tego zbioru. Liczbę permutacji zbioru n-elementowego możemy obliczyć ze wzoru:

$$P_n = n!.$$

* Permutacja z powtórzeniami zbioru n-elementowego z powtarzającymi się elementami to dowolny n-wyrazowy ciąg utworzony ze wszystkich elementów tego zbioru. Liczbę permutacji z powtórzeniami zbioru n-elementowego, gdzie element $a_1$ powtarza się $n_1$ razy, ..., $a_k$ powtarza się $n_k$ razy możemy obliczyć ze wzoru:

$$P_n^{n_1,...,n_k} = \frac{n!}{n_1!...n_k!}.$$

* Wariacja z powtórzeniami. Przyjmijmy, że mamy dany zbiór elementów. Wariacja z powtórzeniami pozwala na utworzenie ciągu z elementów tego zbioru, z tym, że dopuszcza powtarzanie elementów. Wzór na wariację z powtórzeniami jest następujący:

$$W^k_n = n^k.$$

* Wariacja bez powtórzeń. Przyjmijmy, że mamy dany zbiór elementów. Wariacja bez powtórzeń pozwala na utworzenie ciągu z elementów tego zbioru, z tym, że nie dopuszcza powtarzania elementów. Wzór na wariację bez powtórzeń jest następujący:

$$V^k_n = \frac{n!}{(n − k)!}.$$

## Metoda bootstrap
Jest to metoda estymacji polegająca na wielokrotnym losowaniu ze zwracaniem z próby. Jest przydatna gdy nie wiemy z jakiego rozkładu pochodzą zmienne losowe. Przykład użycia tej metody do oszacowania prawdopodobieństwa będzie pokazany w kilku zadaniach.

# Zadania

### Zadanie 1.

Wykonano 3 rzuty symetryczną monetą.\
a) Określ przestrzeń zdarzeń elementarnych $\Omega$.\
b) Określ zdarzenia:\
i) $E$ = "w pierwszym rzucie orzeł",\
ii) $F$ = "w drugim rzucie orzeł".\
c) Oblicz: $P(E \cap F)$, $P(E \cup F)$, $P(E')$, $P(F')$.

Rozwiązanie:

a)\
$\Omega = {(O,O,O),(O,O,R),(O,R,R),(R,R,R),(R,R,O),(R,O,O),(O,R,O),(R,O,R)}$.

b)\
i) $E = {(O,O,O),(O,O,R),(O,R,R),(O,R,O)}$,\
ii) $F = {(O,O,O),(O,O,R),(R,O,R),(R,O,O)}$.

c)\
$P(E \cap F) = \frac{1}{4}$,\
$P(E \cup F) = P(E) + P(F) - P(E \cap F) = \frac{1}{2} + \frac{1}{2} - \frac{1}{4} = \frac{3}{4}$,\
$P(E') = 1 - P(E) = 1 - \frac{1}{2} = \frac{1}{2}$,\
$P(F') = 1 - P(F) = 1 - \frac{1}{2} = \frac{1}{2}$.

### Zadanie 2

Doświadczenie polega na rzucie dwiema symetrycznymi kostkami. Oblicz prawdopodobieństwo, że suma wyrzuconych oczek będzie parzysta.

Rozwiązanie:

Mamy 6 możliwości na jednej kostce i 6 na drugiej co daje 6 * 6 = 36 możliwości więc:

$|\Omega| = 36$.

Aby suma liczb była parzysta na kostkach musi wypaść:
* na obu parzysta liczba: 3 * 3 = 9,
* na ubu nieparzysta liczba: 3 * 3 = 9.

Z powyższego:

$|A| = 18$.

Ostatecznie:

$P = \frac{18}{36} = \frac{1}{2}$.

Zadanie można też rozwiązać rysując tabelkę i sumując kolejne możliwości.

### Zadanie 3

Zdarzenia $A$ oraz $B$ są takie, że $P(A) = 0.45$, $P(B) = 0.22$, $P(A \cup B) = 0.53$. Oblicz $P(A' \cup B')$.

Rozwiązanie:

Należy skorzystać z prawa De Morgana:

$P(A' \cup B') = P((A \cap B)') = 1 - P(A \cap B)$.

Teraz korzystam z wzoru na prawdopodobieństwo sumy zdarzeń:

$P(A \cup B) = P(A) + P(B) − P(A \cap B)$,

$P(A \cap B) = P(A) + P(B) − P(A \cup B)$.

Wstawiam drugie równanie do pierwszego i obliczam wynik:

$P(A' \cup B') = 1 - P(A) - P(B) + P(A \cap B) = 1 - 0.45 - 0.22 + 0.53 = 0.86$.

### Zadanie 4

W partii 170 sztuk towaru 102 elementy są gatunku I, 43 są gatunku II, 25 jest gatunku III. Wybrano losowo jeden element. Oblicz prawdopodobieństwo, że:\
i) element jest III gatunku,\
ii) element jes I lub II gatunku.

Rozwiązanie:

$|\Omega| = 170$

i) $P = \frac{25}{170} \approx 0.15$

ii) $P = \frac{102 + 43}{170} \approx 0.85$

### Zadanie 5

60% uczestników konferencji zna tylko język angielski, 20% zna tylko język niemiecki, 10% zna oba języki. Pozostali nie znają żadnego języka obcego. Oblicz prawdopodobieństwo, że losowo wybrany uczestnik konferencji zna język angielski.

Rozwiązanie:

A - zbiór osób znających tylko język angielski,
B - zbiór osób znających tylko język niemiecki,
C - zbiór osób znających oba języki.

Należy obliczyć $P(A \cup C)$. 

Ponieważ $P(A \cap C) = \emptyset,$ 

to:

$P(A \cup C) = P(A) + P(C) = 0.7$.

### Zadanie 6

Egzamin z matematyki zdaje za pierwszym razem 70% studentów wydziału informatyki, 60% studentów wydziału zarządzania i 50% studentów wydziału ekonomii. Wybrano losowo po jednym studencie z każdego wydziału. Oblicz prawdopodobieństwo, że wśród nich:\
a) żaden nie zda egzaminu z matematyki za pierwszym razem,\
b) dokładnie dwóch zda egzamin z matematyki za pierwszym razem,\
c) co najmniej dwóch zda egzamin z matematyki za pierwszym razem.

Rozwiązanie

a) 0.3 * 0.4 * 0.5 = 0.06\
b) 0.7 * 0.6 * 0.5 + 0.7 * 0.4 * 0.5 + 0.3 * 0.6 * 0.5 = 0.44\
c) 0.44 + 0.7 * 0.6 * 0.5 = 0.65

Sytuację taką można symulować i rozwiązać zadanie używając metody bootstrap:

```python
import numpy as np
import scipy.stats as st

def randsampl(x, size):
  ind = st.randint.rvs(0, len(x), size=size,)
  return x[ind]

A = np.ones(10)
A[7:] = 0
B = np.ones(10)
B[6:] = 0
C = np.ones(10)
C[5:] = 0

D = np.concatenate((A, B, C))

Nboot = 10000
A = np.zeros(Nboot)
for i in range(Nboot):
  result = randsampl(D, 3)
  A[i] = np.sum(result)

print(np.count_nonzero(A==0) / Nboot)
print(np.count_nonzero(A==2) / Nboot)
print(np.count_nonzero((A==2) | (A==3)) / Nboot)
```

### Zadanie 7

Oblicz prawdopodobieństwo, że wśród 5-ciu losowo wybranych kart z talii 52 kart:\
a) nie będzie pika,\
b) będzie co najmniej 1 pik,\
c) będą dokładnie 2 piki.

Rozwiązanie:

W talii jest 4 kolory więc koloru pik jest 13 kart.

$|\Omega| = {52 \choose 5}$.

a)\
Jeżeli ma nie być pika to zbiór zdarzeń sprzyjających będzie miał moc równą:

$|A| = {39 \choose 5}$,

stąd:

$P = \frac{{39 \choose 5}}{{52 \choose 5}} = \frac{39!}{5! \cdot 34!} \cdot \frac{5! \cdot 47!}{52!} = \frac{39 \cdot 38 \cdot 37 \cdot 36 \cdot 35}{52 \cdot 51 \cdot 50 \cdot 49 \cdot 48} = 0.22.$

b)\
Trzeba rozpatrzyć 5 przypadków (jeden pik, dwa piki, ..., pięć pików) i je zsumować:

$B = {13 \choose 1}{39 \choose 4} + {13 \choose 2}{39 \choose 3} + {13 \choose 3}{39 \choose 2} + {13 \choose 4}{39 \choose 1} + {13 \choose 5},$

stąd:

$P = \frac{|B|}{|\Omega|} = 0.78.$

c)\
$C = {13 \choose 2}{39 \choose 3},$

stąd:

$P = \frac{{13 \choose 2}{39 \choose 3}}{{52 \choose 5}} = 0.27.$

Symulacja losowania metodą bootstrap:

```python
import numpy as np
import scipy.stats as st

def randsampl(x, size):
  ind = st.randint.rvs(0, len(x), size=size,)
  return x[ind]

x = np.ones(52)
x[13:] = 0

Nboot = 10000
A = np.zeros(Nboot)
for i in range(Nboot):
  result = randsampl(x, 5)
  A[i] = np.sum(result)

print(np.count_nonzero(A==0) / Nboot)
print(np.count_nonzero((A==1) | (A==2) | (A==3) | (A==4) | (A==5)) / Nboot)
print(np.count_nonzero((A==2)) / Nboot)
```

### Zadanie 8

Do windy w 10-cio piętrowym domu wsiada 5 nieznanych sobie osób. Oblicz prawdopodobieństwo, że wysiądą one na różnych piętrach.

Rozwiązanie:

W tym zadaniu należy skorzystać z wariacji w powtórzeniami i bez powtórzeń. Pierwsza osoba może wybrać 10 pięter, druga również 10, itd. Musimy więc znaleźć liczbę 5-cio elementowych ciągów zbioru 10-cio elementowego jest to wariacja z powtórzeniami:

$|\Omega| = 10 * 10 * 10 * 10 * 10 = 10^5.$

Osoby mogą wysiąść na różnych piętrach tak więc pierwsza osoba ma do dyspozycji 10 pięter, druga 9, trzecia 8 itd. Są to wariacje bez powtórzeń:

$|A| = \frac{10!}{(10 - 5)!} = \frac{10!}{5!} = 6 \cdot 7 \cdot 8 \cdot 9 \cdot 10.$

Ostatecznie:

$P = \frac{6 \cdot 7 \cdot 8 \cdot 9 \cdot 10}{10^5} = \frac{6 \cdot 7 \cdot 8 \cdot 9}{10^4} = 0.3024.$

### Zadanie 9

Egzaminator przygotował 20 pytań, z których zdający losuje 3. Jakie jest prawdopodobieństwo, że uczeń dobrze odpowie na 3 pytania, jeżeli umie odpowiedzieć na połowę pytań.

Rozwiązanie:

3 pytania spośród 20 można wylosować na $ {20 \choose 3} $ sposobów. Uczeń zna odpowiedzi na 10 pytań. 3 pytania spośród 10 można wybrać na $ {10 \choose 3} $. Szukane prawdopodobieństwo to:

$P = \frac{{10 \choose 3}}{{20 \choose 3}} = \frac{10!}{3!7!} \cdot \frac{3!17!}{20!} = \frac{8 \cdot 9 \cdot 10}{18 \cdot 19 \cdot 20} = \frac{2}{19} \approx 0.11$

Bootstrap:

```python
import numpy as np
import scipy.stats as st

def randsampl(x, size):
  ind = st.randint.rvs(0, len(x), size=size,)
  return x[ind]

x = np.ones(20)
x[10:] = 0

Nboot = 100000
A = np.zeros(Nboot)
for i in range(Nboot):
  result = randsampl(x, 3)
  A[i] = np.sum(result)

print(np.count_nonzero(A==3) / Nboot)
```

### Zadanie 10

Z urny, w której jest 13 kul białych i 7 czarnych losujemy 2 kule\
a) ze zwrotem,\
b) bez zwrotu.\
Obliczyć prawdopodobieństwo tego, że obie kule będą białe.

a) $P = \frac{13}{20} \cdot \frac{13}{20} = \frac{169}{400} = 0.4225.$

b) $P = \frac{13}{20} \cdot \frac{12}{19} = \frac{39}{95} \approx 0.4105.$

### Zadanie 11

Z grupy studenckiej liczącej 30 osób w tym 20 chłopców wybrano delegację złożona z 5 osób, przy czym rozważano różne możliwości liczby chłopców i dziewcząt w delegacji, w każdym razie liczby różne od zera. Obliczyć prawdopodobieństwo, że do delegacji będą wybrane najwyżej 3 dziewczyny.

Rozwiązanie:

$|\Omega| = {30 \choose 5} = \frac{30!}{5!25!} = \frac{26 \cdot 27 \cdot 28 \cdot 29 \cdot 30}{5!}$

$|A| = {10 \choose 1}{20 \choose 4} + {10 \choose 2}{20 \choose 3} + {10 \choose 3}{20 \choose 2} = \frac{10!20!}{9!4!16!} + \frac{10!20!}{2!8!3!7!}+ \frac{10!20!}{3!7!2!18!} = \frac{10 \cdot 17 \cdot 18 \cdot 19}{4!}$

$P = \frac{|A|}{|\Omega|} = \frac{10 \cdot 17 \cdot 18 \cdot 19}{4!} \cdot \frac{5!}{26 \cdot 27 \cdot 28 \cdot 29 \cdot 30} = \frac{5 \cdot 10 \cdot 17 \cdot 18 \cdot 19}{26 \cdot 27 \cdot 28 \cdot 29 \cdot 30} \approx 0.86$

### Zadanie 12

Z talii złożonej z 52 kart losujemy jedną. Obliczyć prawdopodobieństwo, że wylosowana karta jest damą lub królem.

Rozwiązanie:

$P = \frac{8}{52} = \frac{2}{13} \approx 0.15$

### Zadanie 13

Rzucamy kostką do gry. Jakie jest prawdopodobieństwo, że w jednym rzucie uzyskano liczbę oczek podzielną przez trzy lub pięć?

Rozwiązanie:

$P = 0.5$

### Zadanie 14

Spośród liczb 5, 6, 7, 8, 9 losujemy kolejno dwie bez zwracania. Jakie jest prawdopodobieństwo, że suma wylosowanych liczb jest nie większa od 13?

Rozwiązanie:

W pierwszym losowaniu mamy do dyspozycji 5 liczb a w drugim 4 więc:

$|\Omega| = 5 \cdot 4 = 20.$

Aby zliczyć liczbę zdarzeń sprzyjających najlepiej narysować sobie tabelkę, mamy ich:

$|A| = 8.$

$P = \frac{|A|}{|\Omega|} = \frac{8}{20} = 0.4.$

### Zadanie 15

W przetargu bierze udział 5 firm. Prawdopodobieństwo tego, że wygra firma A jest równe 0.25, natomiast, że wygra firma B - 0.4. Jakie jest prawdopodobieństwo, że przetarg wygra firma A lub B?

Rozwiązanie:

$P = 0.25 + 0.4 = 0.65.$

### Zadanie 16

Wykonujemy jeden rzut kostką sześcienną do gry. Jakie jest prawdopodobieństwo zdarzenia przeciwnego do zdarzenia polegającego na tym, że otrzymaliśmy jedno lub trzy oczka?

Rozwiązanie:

A = {1 lub 3 oczka}

$P(A) = \frac{1}{3}$

$P(A') = 1 - P(A) = 1 - \frac{1}{3} = \frac{2}{3}$

### Zadanie 17
Z cyfr $1, 2, . . . , 9$ losujemy bez zwracania trzy cyfry $x, y, z$ i tworzymy liczbę trzycyfrową $xyz$. Obliczyć prawdopodobieństwo, że otrzymamy liczbę mniejszą od $555$.

Rozwiązanie:

W pierwszym losowaniu mamy do dyspozycji 9, w drugim 8, w trzecim 7, więc:

$|\Omega| = 9 \cdot 8 \cdot 7$

Załóżmy, że na miejscu $x$ stoi liczba od 1 do 4 daje nam to 4 możliwości, na miejscu $y$ i $z$ może więc stać dowolne liczba z pozostałych więc mamy $4 \cdot 8 \cdot 7$ możliwości. 

Kiedy na miejscu $x$ wstawimy liczbę 5 to na miejscu $y$ mogą być tylko liczby od 1 do 4 co daje 4 możliwości, na miejscu $z$ może być dowolna liczba z pozostałych czyli 7 możliwości, daje to $1 \cdot 4 \cdot 7$ możliwości. Ostatecznie liczba zdarzeń sprzyjających wynosi:

$|A| = 4 \cdot 8 \cdot 7 + 1 \cdot 4 \cdot 7 = 4 \cdot 7(8 + 1) = 4 \cdot 7 \cdot 9,$

$P = \frac{|A|}{|\Omega|} = \frac{4 \cdot 7 \cdot 9}{9 \cdot 8 \cdot 7} = 0.5.$

### Zadanie 18
Na dziesięciu klockach wyrzeźbiono litery: a, a, k, s, s, t, t, t, y, y. Bawiąc sie nimi dziecko układa je w rząd. Obliczyć prawdopodobieństwo tego, że przypadkowo złoży ono słowo „statystyka”.

Rozwiązanie:

Korzystam ze wzoru na liczbę permutacji z powtórzeniami, gdzie litery "a", "s", "y" powtarzają się 3 razy a litera "t" powtarza się 3 razy. Obliczam prawdopodobieństwo:

$P = \frac{1}{\frac{10!}{2!2!2!3!}} = \frac{1}{75600}.$

Druga metoda:

Liczba wszystkich możliwych ułożeń klocków jest równa liczbie permutacji ciągu 10-cio elementowego, mamy:

$|\Omega| = 10!$

Liczba zdarzeń sprzyjających może być obliczona w następujący sposób: na pierwsze miejsce można wybrać jeden klocek z literą $s$ spośród dwóch, na drugie miejsce może zostać wybrana jedne klocek z literą $t$ spośród trzech itd. (należy pamiętać o zmniejszającej się liczbie klocków więc ostatnie pięć miejsc to same jedynki):

$|A| = 2\cdot3\cdot2\cdot2\cdot2\cdot1\cdot1\cdot1\cdot1\cdot1 = 48,$

$P = \frac{|A|}{|\Omega|} = \frac{48}{10!} = \frac{1}{75600}.$

Trzecia metoda metoda:

Wybieramy odpowiednie klocki spośród 10:

$P = \frac{2}{10} \cdot \frac{3}{9} \cdot \frac{2}{8} \cdot \frac{2}{7} \cdot \frac{2}{6} \cdot \frac{1}{5} \cdot \frac{1}{4} \cdot \frac{1}{3} \cdot \frac{1}{2} \cdot \frac{1}{1} = \frac{1}{75600}.$

Ciekawe zadanie z kombinatoryki z książki: W. Krysicki, J. Bartos, W. Dyczka, K. Królikowska, M. Wasilewski. Część I. Rachunek prawdopodobieństwa i statystyka matematyczna w zadaniach. Wydawnictwo Naukowe PWN Warszawa 1995.

### Zadanie 19
W fizyce statystycznej rozważa się rozkład (rozmieszczenie) $k$ cząstek w $n$ elementarnych obszarach zwanych komórkami (komórki są rozróżnialne). W zależności od postaci tych cząstek przyjmuje się jedno z trzech następujących założeń:

1. cząstki różnią się między sobą i liczba cząstek w jednej komórce jest dowolna,
2. cząstki są nierozróżnialne między sobą i liczba cząstek w jednej komórce jest dowolna,
3. cząstki nie różnią się między sobą i w każdej komórce może znajdować się co najwyżej jedna cząstka.

Stosownie od przyjętych założeń mówi się odpowiednio o statystyce: Maxwella-Boltzmanna, Bosego-Einsteina, Fermiego-Diraca. Zakładamy, ponadto, że wszystkie dopuszczalne rozmieszczenia są jednakowo prawdopodobne. Znaleźć prawdopodobieństwo tego, że:\
a) $k$ cząstek rozmieścić się po jednej w $k$ ustalonych komórkach dla każdej z rozważanych statystyk,\
b) w przypadku statystyki Bosego-Einsteina znajdzie się dokładnie $m$ cząstek\
b1) w ustalonej komórce,\
b2) w jednej z $n$ komórek\
c) w przypadku statystyki Bosego-Einsteina wszystkie komórki będą zajęte,\
d) w przypadku statystyki Maxwella-Boltzmana w pierwszej komórce znajdzie się dokładnie $k_1$ cząstek, w drugiej - $k_2$ cząstek, ... , w $n$-tej - $k_n$ cząstek.

Rozwiązanie:

Na początku określę dla każdej ze statystyk moc zbioru zdarzeń elementarnych.

1. W tym podpunkcie rozważamy na ile sposobów można rozmieści $k$ nierozróżnialnych cząstek w $n$ rozróżnialnych komórkach, ponieważ cząstki są różne od siebie to należy zastosować wariacje pytanie czy powtórzeniami czy bez. Do komórek może wchodzić różna liczba cząstek, dodatkowo niektóre komórki mogą zostać puste tak więc to każdej cząstce należy przyporządkować komórkę. Każda z $k$ cząstek może wpaść do $n$ komórek, mamy więc wariacje z powtórzeniami:
$$|\Omega_1| = n^k$$
Przykład, jeżeli ustalimy $k=4$ i $n = n$ to liczba przyporządkowań wynosi $n\cdot n\cdot n\cdot n = n^4$ bo pierwszej cząstce można przypisać $n$ komórek, drugiej również $n$ itd.

2. Tutaj jest prosta sytuacja, ponieważ jeżeli chcemy obliczyć na ile sposobów rozmieścić $k$ nierozróżnialnych cząstek w $n$ rozróżnialnych komórkach tak, że w danej komórce może być dowolna liczba cząstek (nawet zero lub $k$) to służą do tego kombinacje z powtórzeniami:
$$|\Omega_2| = {k + n - 1 \choose k}$$

3. Najprostsza sytuacja bo należy zastosować kombinacje bez powtórzeń (tutaj oczywiście założenie, że liczba cząstek jest mniejsza od liczby komórek):
$$|\Omega_3| = {n \choose k}$$

a) Ponieważ $k$ komórek jest ustalonych to odpada proces ich wybierania.

1. Cząstki są rozróżnialne więc ma znaczenie w jakiej kolejności są ułożone, sposoby rozmieszczenia $k$ cząstek w $k$ ustalonych komórkach to permutacje. Mamy więc:
$$P = \frac{k!}{n^k}$$
2. Ponieważ cząstki nie są rozróżnialne to $k$ cząstek w $k$ ustalonych komórkach można rozmieścić na jeden sposób:
$$P = \frac{1}{{k + n - 1 \choose k}}$$
3. Sytuacja jak wyżej:
$$P = \frac{1}{{n \choose k}}$$

b1) Ponieważ w ustalonej komórce znajduje się $m$ cząstek to należy ustalić liczbę rozmieszczeń pozostałych $k - m$ cząstek w $n-1$ komórek, są to kombinacje z powtórzeniami:
$$P = \frac{{k-m+n-1-1 \choose k-m}}{{k + n - 1 \choose k}} = 
\frac{{k+n-m-2 \choose k-m}}{{k + n - 1 \choose k}}$$

b2) Sytuacja jest podobna do powyższej jednak komórka nie jest ustalona a wybrać ją można na $n$ sposobów co daje:
$$P = \frac{n{k+n-m-2 \choose k-m}}{{k + n - 1 \choose k}}$$

c) Jeżeli każda komórka ma być zapełniona to $k \ge n$, najpierw zapełniamy $n$ komórek po jednej cząstce można to zrobić dokładnie w jeden sposób ponieważ cząstki są nierozróżnialne. Pozostaje rozmieścić $k - n$ cząstek w $n$ komórkach:

$$P = \frac{1\cdot{k-n+n-1 \choose k-n}}{{k + n - 1 \choose k}} = 
\frac{{k-1 \choose k-n}}{{k + n - 1 \choose k}},$$

ponieważ:

$${k-1 \choose k-n} = \frac{(k-1)!}{(k-n)!(k-1-k+n)} = \frac{(k-1)!}{(n-1)!(k-1-n+1)!} = {k-1 \choose n-1},$$

to:

$$P = \frac{{k-1 \choose n-1}}{{k + n - 1 \choose k}}.$$

d) Tutaj jest prosta sprawa ponieważ należy wykorzystać permutacje z powtórzeniami:

$$P = \frac{\frac{k!}{k_1!k_2!...k_n!}}{n^k} = \frac{k!}{n^kk_1!k_2!...k_n!}.$$
