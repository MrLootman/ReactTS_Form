# Les gestions de formulaire

### Le formulaire contrôlé

Dans cet exercice, tu vas devoir te rendre dans le composant `LoginForm`, et écrire le code nécessaire pour que les valeurs entrées dans les inputs soient stockées dynamiquement.

Deux contraintes pour y parvenir :
  1. Tout caractère entrant doit être stocké dans une variable d'état (à minima).
  2. Ton `console.log` doit te montrer les données renseignées dans un objet. 

_Exemple_ : Si un utilisateur écrit "Blabla" dans le premier input, et "1234" dans le second, la console de ton navigateur devrait renvoyer les informations suivantes :

```typescript
  /**
   * La console du navigateur doit renvoyer le code formaté comme suit :
   * 
   * {
   *    name: "Blabla",
   *    password: "1234"
   * }
   */
```