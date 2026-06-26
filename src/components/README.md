# Estrutura de componentes

Organização por **Atomic Design**, desenvolvida no fluxo de **Component-Driven Development (CDD)**:
cada componente é construído e validado isoladamente no Storybook, do nível mais simples (átomo)
ao mais composto (template), antes de ser integrado nas páginas da aplicação.

Referência visual/funcional base: [ALMG](https://www.almg.gov.br/).

```
components/
  atoms/        # menor unidade de UI: Button, Input, Badge, Label, Icon...
  molecules/    # combinação de átomos com um propósito único: SearchField, FormGroup, MenuItem...
  organisms/    # seções completas de interface: Header, Footer, Navbar, NewsCard...
templates/      # layout de página sem conteúdo real, compõe organismos/moléculas
pages/          # instância de um template com conteúdo real
```

## Convenção por componente

Cada componente vive na sua própria pasta, com a história do Storybook colocada (co-located)
junto ao código — princípio central do CDD:

```
atoms/Button/
  Button.tsx
  Button.stories.tsx
  index.ts          # barrel export
```

- `title` das stories segue a hierarquia: `"Atoms/Button"`, `"Molecules/SearchField"`,
  `"Organisms/Header"`, etc.
- Cada nível tem um `index.ts` que reexporta seus componentes (`atoms/index.ts`,
  `molecules/index.ts`...), permitindo `import { Button } from "@/components/atoms"`.
- Um componente de um nível só pode importar de níveis iguais ou inferiores
  (organism pode usar molecule/atom; átomo não importa de molecule/organism).
