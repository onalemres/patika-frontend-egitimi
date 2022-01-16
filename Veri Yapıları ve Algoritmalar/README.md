# Insertion Sort Projesi

## Proje 1

### [22,27,16,2,18,6] -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

```
[22,27,16,2,18,6]   n

[2,27,16,22,18,6]   n-1

[2,6,16,22,18,27]   n-2

[2,6,16,18,22,27]   1
```

2. Big-O gösterimini yazınız.

```
n + (n-1) + (n-2)+ …... +1

n.(n+1) / 2

n²+n / 2

O(n²)
```

3. Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.

```
Time Complexity

[2,6,16,18,22,27]

Worst Case:  27
Vereceğimiz inputun algoritmamızı en yavaş (en fazla işlem yapacak) şekilde çalıştırdığı durum. 
Aradığımız kelimenin z harfi ile başlaması gibi,
Aradığımız sayının sonda olması

Average Case: 16-18
Genel olarak beklediğim durum. Aradığımız sayının ortada olması

Best Case: 2 
Vereceğimiz inputun algoritmamızı en hızlı şekilde çalıştırdığı durum.

Aradığımız sayının dizinin en başında olması.

```

4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

```
[2,6,16,18,22,27]

"Avarege Case" kapsamına girmektedir.
```


### [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

```

[7,3,5,8,2,9,4,15,6]

[2,3,5,8,7,9,4,15,6]

[2,3,4,8,7,9,5,15,6]

[2,3,4,5,7,9,8,15,6]

** 4 adımdan sonrası **

[2,3,4,5,6,9,8,15,7]

[2,3,4,5,6,7,8,15,9]

[2,3,4,5,6,7,8,9,15]


```
# Merge Sort Projesi

## Proje 2

### [16,21,11,8,12,22] -> Merge Sort

1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.

```
			    [16,21,11,8,12,22]

		    [16,21,11]		[8,12,22]
	
    [16]    [21,11]				[8,12]	   [22]

    [16]  	[21] [11]	        [8] [12]   [22]

    [16,]	[11, 21]		    [8,12]	   [22]

             [11,16,21]		 [8,12,22]	

                [8,11,12,16,21,22]
```

2. Big-O gösterimini yazınız.

```
2^x = n

logn = x
	
O(nlogn)

```
---
# Binary Search Tree Projesi

## Proje 3

### [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

```
Soruda verilen  değer kümesi : 

 [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]  

Binary Search bu diziyi manipüle ederek şu ifadeye dönüştürür :

[0,1,2,3,4,5,6,7,8,9]

9 : sayısını en yüksek sayı
0 : sayısını en düşük sayı ilan ediyor.
Root: 5


                         5
                       /   \
                     /       \
                   3           7
                 /   \        /  \  
               1       4     6     8
              / \                    \
            0     2                    9

```
2. Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

```
Root 5’dir.
Sağında: 7 bulunur.
Solunda : 3 bulunur.
```
