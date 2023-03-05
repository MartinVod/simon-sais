import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {getScoreboard} from '~/Firebase/actions';
import {ScoreboardItem} from '~/Types';

const ScoreboardTable: React.FC = () => {
  const [scoreboard, setScoreboard] = useState<ScoreboardItem[]>([]);

  useEffect(() => {
    getScoreboard().then((scoreList: ScoreboardItem[]) =>
      setScoreboard(scoreList),
    );
  }, []);

  const renderScoreboardItem = ({item}: {item: ScoreboardItem}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.column}>{item.displayName}</Text>
        <Text style={styles.column}>{item.score}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>Name</Text>
        <Text style={styles.heading}>Score</Text>
      </View>
      <FlatList
        data={scoreboard}
        renderItem={renderScoreboardItem}
        keyExtractor={item => item.userId}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
  },
  list: {
    flex: 1,
  },
});

export default ScoreboardTable;
