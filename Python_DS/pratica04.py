# 1. Faça um programa que solicite à pessoa usuária digitar dois números float e calcular a divisão entre esses números. O código deve conter um tratamento de erro, indicando o tipo de erro que foi gerado caso a divisão não seja possível de realizar.
# Teste o programa com o segundo valor numérico do input igual a 0. Também teste utilizando caracteres textuais no input para checar os tipos de erro que ocorrem.

try:
    numero_1 = float(input('Digite um número: '))
    numero_2 = float(input('Digite outro número: '))
    divisao = numero_1 / numero_2
except Exception as e:
    print(type(e), f'Erro: {e}')

# 2. Faça um programa que solicite à pessoa usuária digitar um texto que será uma chave a ser pesquisada no seguinte dicionário: idades = {'Júlia': 16, 'Carol': 23, 'Alberto': 19, 'Roberta': 17}, armazenando o resultado do valor em uma variável. O código deve conter um tratamento de erro KeyError, imprimindo a informação 'Nome não encontrado', caso ocorra o erro; e imprimir o valor caso não ocorra nenhum.
# Teste o programa com um nome presente em uma das chaves do dicionário e com um que não esteja no dicionário para verificar a mensagem de erro.

idades = {'Júlia': 16, 'Carol': 23, 'Alberto': 19, 'Roberta': 17}
try:
    chave = input('Digite o nome desejado: ')
    valor = idades[chave]
except KeyError:
    print('Nome não encontrado')
else:
    print(valor)

# 3. Crie uma função que recebe uma lista como parâmetro e converta todos os valores da lista para float. A função deve conter um tratamento de erro indicando o tipo de erro gerado e retornar a lista caso não tenha ocorrido nenhum erro. Por fim, deve ter a cláusula finally para imprimir o texto: 'Fim da execução da função'.


def converte_lista(lista):
    try:
        nova_lista = [float(elemento) for elemento in lista]
    except Exception as e:
        print(type(e), f'Erro: {e}')
    else:
        return nova_lista
    finally:
        print('Fim da execução da função')

# 4. Crie uma função que recebe duas listas como parâmetros e agrupe os elementos um a um das listas, formando uma lista de tuplas de 3 elementos, no qual o primeiro e segundo elemento da tupla são os valores na posição i das listas e o terceiro elemento é a soma dos valores na posição i das listas.
# A função deve conter um tratamento de erro indicando o tipo de erro gerado e retornar como resultado a lista de tuplas. Caso as listas enviadas como parâmetro tenham tamanhos diferentes, a função deve retornar um IndexError com a frase: 'A quantidade de elementos em cada lista é diferente.' Dados para testar a função:


'''Valores sem erro:
lista1 = [4,6,7,9,10]
lista2 = [-4,6,8,7,9]'''

'''Listas com tamanhos diferentes:
lista1 = [4,6,7,9,10,4]
lista2 = [-4,6,8,7,9]'''

'''Listas com valores incoerentes:
lista1 = [4,6,7,9,'A']
lista2 = [-4,'E',8,7,9]'''


def soma_listas(lista1, lista2):
    try:
        if len(lista1) == len(lista2):
            dados = [(lista1[i], lista2[i], lista1[i]+lista2[i])
                     for i in range(len(lista1))]
        else:
            raise IndexError(
                'A quantidade de elementos em cada lista é diferente.')
    except Exception as e:
        print(type(e), f'Erro: {e}')
    else:
        return dados
