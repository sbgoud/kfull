// app/screens/WalletScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

export default function WalletScreen() {
  // For demonstration, keep track of balance in state
  const [balance, setBalance] = useState(100.0);   // initial dummy balance
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([
    { id: '1', date: '2025-01-19 10:30', amount: '+ 50', type: 'Top-up' },
    { id: '2', date: '2025-01-18 17:45', amount: '- 20', type: 'Call Payment' },
  ]);

  const handleAddMoney = () => {
    if (amount) {
      const amt = parseFloat(amount);
      if (!isNaN(amt) && amt > 0) {
        setBalance((prev) => prev + amt);
        // push a new transaction
        const newTrans = {
          id: (transactions.length + 1).toString(),
          date: new Date().toLocaleString(), 
          amount: `+ ${amt}`,
          type: 'Top-up',
        };
        setTransactions([newTrans, ...transactions]);
        setAmount('');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet</Text>
      <Text style={styles.balance}>Current Balance: ${balance.toFixed(2)}</Text>

      <View style={styles.addMoneySection}>
        <TextInput
          style={styles.input}
          placeholder="Enter amount to add"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <Button title="Add Money" onPress={handleAddMoney} color="#1D4ED8" />
      </View>

      <Text style={styles.subtitle}>Recent Transactions:</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text style={styles.transactionDate}>{item.date}</Text>
            <Text style={styles.transactionType}>{item.type}</Text>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
        )}
        style={{ marginTop: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1D4ED8',
  },
  balance: {
    fontSize: 18,
    marginBottom: 16,
  },
  addMoneySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 8,
  },
  transactionItem: {
    backgroundColor: '#f3f4f6',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  transactionDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  transactionType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#1D4ED8',
  },
});
