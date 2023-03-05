import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, I18nManager} from 'react-native';

import {getScoreboard} from '~/Firebase/actions';
import {ScoreboardItem} from '~/Types';
import {colors} from '~/utils/colors';

const ScoreboardTable: React.FC = () => {
  const [scoreboard, setScoreboard] = useState<ScoreboardItem[]>([]);

  useEffect(() => {
    getScoreboard().then((scoreList: ScoreboardItem[]) =>
      setScoreboard(scoreList),
    );
  }, []);

  const renderScoreboardItem = ({
    item,
    index,
  }: {
    item: ScoreboardItem;
    index: number;
  }) => {
    return (
      <View style={styles.row}>
        <Text style={styles.column}>{index + 1}</Text>
        <Text style={styles.column}>{item.displayName}</Text>
        <Text style={styles.column}>{item.score}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.heading}>#</Text>
        <Text style={styles.heading}>Name</Text>
        <Text style={styles.heading}>Score</Text>
      </View>
      <FlatList
        data={scoreboard}
        renderItem={renderScoreboardItem}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.dataRows}
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
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.black,
    width: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: colors.solid,
    flex: 1,
    alignItems: 'center',
  },
  column: {
    flex: 1,
    marginHorizontal: 10,
    width: '100%',
  },
  list: {},
  dataRows: {
    width: '100%',
    flex: 1,
  },
});

export default ScoreboardTable;
