import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  function handleAcessar() {
    console.log({ email, senha });
  }

  function handleCriarConta() {
    navigation?.navigate?.('SignUp');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.hero}>
        <View style={styles.heroOverlay} />

        <View style={styles.brandRow}>
          <MaterialCommunityIcons name="dumbbell" size={26} color={COLORS.accent} />
          <Text style={styles.brandTitle}>Ignite Gym</Text>
        </View>
        <Text style={styles.brandSubtitle}>Treine sua mente e o seu corpo</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.formWrapper}
      >
        <ScrollView
          contentContainerStyle={styles.formContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.formTitle}>Acesse sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={COLORS.placeholder}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <View style={styles.passwordField}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Senha"
              placeholderTextColor={COLORS.placeholder}
              secureTextEntry={!senhaVisivel}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity
              onPress={() => setSenhaVisivel((v) => !v)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <MaterialCommunityIcons
                name={senhaVisivel ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={COLORS.placeholder}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={handleAcessar}
          >
            <Text style={styles.primaryButtonText}>Acessar</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Ainda não tem acesso?</Text>
            <TouchableOpacity
              style={styles.secondaryButton}
              activeOpacity={0.85}
              onPress={handleCriarConta}
            >
              <Text style={styles.secondaryButtonText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const COLORS = {
  background: '#121214',
  card: '#1E1E20',
  accent: '#00B37E',
  accentDim: 'rgba(0, 179, 126, 0.12)',
  text: '#F5F5F7',
  placeholder: '#8D8D99',
  overlay: 'rgba(10, 10, 12, 0.55)',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  hero: {
    height: '46%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 28,
    backgroundColor: '#1A1D1E',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.overlay,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: (RNStatusBar.currentHeight || 0) + 40,
  },
  brandTitle: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: '700',
  },
  brandSubtitle: {
    color: COLORS.text,
    fontSize: 13,
    marginTop: 4,
    opacity: 0.85,
  },
  formWrapper: {
    flex: 1,
  },
  formContent: {
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 32,
    alignItems: 'center',
  },
  formTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: COLORS.text,
    fontSize: 14,
    marginBottom: 14,
  },
  passwordField: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.card,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 24,
  },
  passwordInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 14,
    paddingRight: 12,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: COLORS.accent,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 28,
  },
  primaryButtonText: {
    color: '#0A0A0B',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: COLORS.placeholder,
    fontSize: 13,
    marginBottom: 14,
  },
  secondaryButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.accent,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: COLORS.accent,
    fontSize: 15,
    fontWeight: '700',
  },
});
