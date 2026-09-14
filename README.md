# Ignite Gym

App mobile em React Native (Expo SDK 57), desenvolvido para a disciplina.

## Organização do projeto

Cada tela é executada individualmente, então o projeto está dividido em uma branch por tela:

| Branch | Tela |
|---|---|
| `login` | Tela de login (`LoginScreen`) |
| `history` | Tela de histórico de exercícios (`HistoryScreen`) |

## Como rodar

```bash
git checkout <nome-da-branch>
npm install
npx expo start -c
```

Escaneie o QR code com o app Expo Go (ou rode em um emulador) para visualizar a tela daquela branch.