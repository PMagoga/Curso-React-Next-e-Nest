### criando um projeto com vite

```
npm create vite@latest
```

- para os componentes react usar PascalCase
- criar pastas para componentes/styles dentro de src, para fins de organização
- nome de classe no tsx é className, para não confundir com class do JS

- pacote de ícones, pode usar no lucide.dev

#### Dicas Typescript

##### criar o tsconfig.json

```
npx tsc --init
```

#### habilitar o node ler arquivos typescript

```
npm i tsx -D
```

#### lib para buildar projetos em typescript

`npm i tsup ` ==> criar um outro script "build": "tsup src"
depois rodar `npm run build`

- para fazer um componente poder usar "children" usar essa sintaxe de desestruturação, ou seja, para utilizar props

```javascript
type ContainerProps = {
  children: React.ReactNode,
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
```

- props são objetos que permitem passar dados de um componente pai para um componente filho, tornando os componentes dinâmicos e reutilizáveis, como por exemplo:

```javascript
const Saudacao = () => {
  return <p>Olá, Jorge!</p>;
};
```

Com props.
Código

```javascript
const SaudacaoComProps = (props) => {
  return <p>Olá, {props.nome}!</p>;
};
```

No componente pai, você o usaria assim:
Código

```javascript
<SaudacaoComProps nome="Maria" />
```

##### 1. União de Tipos (&) - Interseção

- A união de tipos (ou interseção) em TypeScript, representada pelo símbolo &, combina dois ou mais tipos em um novo tipo que deve satisfazer todos os tipos envolvidos.

<table><thead><tr><td>Conceito</td><td>Símbolo</td><td>Explicação</td><td>Exemplo de Uso</td></tr></thead><tbody><tr><td><b>Interseção</b></td><td><code>&amp;</code></td><td>Cria um tipo que possui <b>todas as propriedades</b> de <code>TipoA</code> <b>e</b> de <code>TipoB</code>. Se houver propriedades com o mesmo nome, seus tipos também se unem.</td><td><code>type NovoTipo = TipoA &amp; TipoB;</code></td></tr><tr><td><b>No React/Props</b></td><td><code>&amp;</code></td><td>Usado para <b>adicionar propriedades obrigatórias</b> a um tipo base, como as <i>props</i> nativas de um elemento HTML.</td><td><code>type Props = { id: string } &amp; BaseProps;</code></td></tr></tbody></table>

#### 1. React.ComponentProps<T>

É uma Utility Type do React que permite extrair as definições de propriedades (props) de um componente ou elemento nativo.

<table><thead><tr><td>Conceito</td><td>Sintaxe</td><td>Explicação</td><td>Benefício Principal</td></tr></thead><tbody><tr><td><b>ComponentProps</b></td><td><code>React.ComponentProps&lt;T&gt;</code></td><td>Extrai as <i>props</i> esperadas pelo elemento ou componente <code>T</code>. O <code>T</code> pode ser o nome de um elemento HTML como <code>"input"</code>, <code>"button"</code>, etc., ou a referência a um componente React.</td><td>Permite que componentes personalizados aceitem <b>todas as <i>props</i> nativas</b> (como <code>onChange</code>, <code>className</code>, <code>disabled</code>, <code>type</code>, etc.) sem a necessidade de reescrever manualmente a tipagem.</td></tr></tbody></table>

##### React Props

Props são argumentos passados ​​para componentes React.
Props são passados ​​para componentes através de atributos HTML.
As props do React são como argumentos de função em JavaScript e atributos em HTML.
Para enviar props para um componente, use a mesma sintaxe dos atributos HTML:

##### useState

O hook useState do React permite rastrear o estado em um componente funcional.
Estado geralmente se refere a dados ou propriedades que precisam ser rastreados em uma aplicação.
A função `useState` aceita um estado inicial e retorna dois valores:

- O estado atual.
- Uma função que atualiza o estado.

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");
}
```

O primeiro valor, `color`, representa nosso estado atual.
O segundo valor, `setColor`, é a função usada para atualizar nosso estado.
