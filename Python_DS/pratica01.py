# 1. Escreva um código para instalar a versão 3.7.1 da biblioteca matplotlib.
'''!pip install matplotlib==3.7.1'''

# 2. Escreva um código para importar a biblioteca numpy com o alias np.

import math
from random import choices
from random import randrange
import numpy as np

# 3. Crie um programa que leia a seguinte lista de números e escolha um número desta aleatoriamente. lista = [8, 12, 54, 23, 43, 1, 90, 87, 105, 77]

from random import choice
lista = [8, 12, 54, 23, 43, 1, 90, 87, 105, 77]
escolha = choice(lista)
escolha

# 4. Crie um programa que sorteia, aleatoriamente, um número inteiro positivo menor que 100.
'''Dica: use a função randrange() da biblioteca random. Essa função recebe como parâmetro o valor limite para a escolha aleatória ou um intervalo se passado o limite mínimo e máximo.
Por exemplo, randrange(5) gera valores inteiros menores que 5.'''

escolhido = randrange(100)
escolhido

# 5. Crie um programa que solicite à pessoa usuária digitar dois números inteiros e calcular a potência do 1º número elevado ao 2º.
# Dica: use a função pow() da biblioteca math

num_1 = int(input('Digite um número inteiro: '))
num_2 = int(input('Digite outro número inteiro: '))
potencia = pow(num_1, num_2)
potencia

# Aplicando a projetos
# 6. Um programa deve ser escrito para sortear uma pessoa seguidora de uma rede social para ganhar um prêmio. A lista de participantes é numerada e devemos escolher aleatoriamente um número de acordo com a quantidade de participantes. Peça à pessoa usuária para fornecer o número de participantes do sorteio e devolva para ela o número sorteado.

participantes = int(input('Digite a quantidade de participantes: '))
sorteado = randrange(1, participantes)
sorteado

# 7. Você recebeu uma demanda para gerar números de token para acessar o aplicativo de uma empresa. O token precisa ser par e variar de 1000 até 9998. Escreva um código que solicita à pessoa usuária o seu nome e exibe uma mensagem junto a esse token gerado aleatoriamente. "Olá, [nome], o seu token de acesso é [token]! Seja bem-vindo(a)!"

token = randrange(1000, 9998, 2)
nome = input('Digite seu nome: ')
print(f'Olá, {nome}, o seu token de acesso é {token}! Seja bem-vindo(a)!')

# 8. Para diversificar e atrair novos(as) clientes, uma lanchonete criou um item misterioso em seu cardápio chamado "salada de frutas surpresa". Neste item, são escolhidas aleatoriamente 3 frutas de uma lista de 12 para compor a salada de frutas da pessoa cliente. Crie o código que faça essa seleção aleatória de acordo com a lista abaixo:
'''frutas = ["maçã", "banana", "uva", "pêra", 
          "manga", "coco", "melancia", "mamão",
          "laranja", "abacaxi", "kiwi", "ameixa"]'''

frutas = ["maçã", "banana", "uva", "pêra",
          "manga", "coco", "melancia", "mamão",
          "laranja", "abacaxi", "kiwi", "ameixa"]
salada = choices(frutas, k=3)
salada

# 9. Você recebeu um desafio de calcular a raiz quadrada de uma lista de números, identificando quais resultaram em um número inteiro. A lista é a seguinte: numeros = [2, 8, 15, 23, 91, 112, 256]
'''No final, informe quais números possuem raízes inteiras e seus respectivos valores.

Dica: use a comparação entre a divisão inteira (//) da raiz por 1 com o valor da raiz para verificar se o número é inteiro. Por exemplo:

num = 1.5
num_2 = 2
print(f'{num} é inteiro? :', num // 1 == num)
print(f'{num_2} é inteiro? :', num_2 // 1 == num_2)
Saída:
1.5 é inteiro? : False
2 é inteiro? : True'''

numeros = [2, 8, 15, 23, 91, 112, 256]

for numero in numeros:
    raiz = np.sqrt(numero)
    if raiz // 1 == raiz:
        print(f'A raiz quadrada de {numero} é {
              int(raiz)} e é um número inteiro.')
    else:
        print(f'A raiz quadrada de {numero} não é um número inteiro.')

# 10. Faça um programa para uma loja que vende grama para jardins. Essa loja trabalha com jardins circulares e o preço do metro quadrado da grama é de R$ 25,00. Peça à pessoa usuária o raio da área circular e devolva o valor em reais do quanto precisará pagar.
# Dica: use a variável pi e o método pow() da biblioteca math. O cálculo da área de um círculo é de: A = π*r^2 (lê-se pi vezes raio ao quadrado).


raio = float(input("Digite o raio da área circular do seu jardim em metros: "))
area = math.pi * math.pow(raio, 2)
preco_metro_quadrado = 25.00
valor_total = area * preco_metro_quadrado

print(f"O valor total a pagar pela grama do seu jardim é de R$ {
      valor_total:.2f}")
