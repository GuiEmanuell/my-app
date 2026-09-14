import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';


const HISTORICO_MOCK = [
  {
    date: '26.08.22',
    exercises: [
      { id: '1', group: 'Costas', name: 'Puxada frontal', time: '08:56' },
      { id: '2', group: 'Costas', name: 'Remada unilateral', time: '08:32' },
    ],
  },
  {
    date: '26.08.22',
    exercises: [
      { id: '3', group: 'Costas', name: 'Puxada frontal', time: '11:24' },
    ],
  },
];

function ExerciseCard({ group, name, time }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardGroup}>{group}</Text>
        <Text style={styles.cardName}>{name}</Text>
      </View>
      <Text style={styles.cardTime}>{time}</Text>
    </View>
  );
}

function DateSection({ date, exercises }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionDate}>{date}</Text>
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} {...exercise} />
      ))}
    </View>
  );
}

function TabBarIcon({ name, focused, onPress }) {
  return (
    <TouchableOpacity style={styles.tabItem} onPress={onPress} hitSlop={12}>
      <Ionicons
        name={name}
        size={24}
        color={focused ? COLORS.accent : COLORS.placeholder}
      />
    </TouchableOpacity>
  );
}

export default function HistoryScreen({ navigation }) {
  const historico = HISTORICO_MOCK;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Histórico de Exercícios</Text>

      {historico.length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="barbell-outline" size={32} color={COLORS.placeholder} />
          <Text style={styles.emptyText}>
            Ainda não há exercícios registrados.{'\n'}Vamos treinar hoje?
          </Text>
        </View>
      ) : (
        <FlatList
          data={historico}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <DateSection date={item.date} exercises={item.exercises} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <View style={styles.tabBar}>
        <TabBarIcon
          name="home-outline"
          onPress={() => navigation?.navigate?.('Home')}
        />
        <TabBarIcon
          name="time-outline"
          focused
          onPress={() => navigation?.navigate?.('History')}
        />
        <TabBarIcon
          name="person-outline"
          onPress={() => navigation?.navigate?.('Profile')}
        />
      </View>
    </SafeAreaView>
  );
}

const COLORS = {
  background: '#121214',
  card: '#1E1E20',
  accent: '#00B37E',
  text: '#F5F5F7',
  placeholder: '#8D8D99',
  border: '#29292E',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  title: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 24,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionDate: {
    color: COLORS.placeholder,
    fontSize: 13,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 10,
  },
  cardGroup: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardName: {
    color: COLORS.placeholder,
    fontSize: 13,
  },
  cardTime: {
    color: COLORS.placeholder,
    fontSize: 13,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 12,
  },
  emptyText: {
    color: COLORS.placeholder,
    fontSize: 14,
    textAlign: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingVertical: 14,
  },
  tabItem: {
    padding: 8,
  },
});
