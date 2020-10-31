import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Counter from "./src/components/Counter";
import News from "./src/components/News";
import CounterTest from "./src/components/CounterTest";
import Input from "./src/components/Input";

// Используется при инициализации компонента
const useMount = () => {
  useEffect(() => {
    console.log('mount')
  }, [])
}

// Используется при удалении компонента из рендера
const useUnMount = () => {
  useEffect(() => {
    return () => {
      console.log('un mount')
    }
  }, [])
}

const useWatchName = (name) => {
  useEffect(() => {
    console.log('name', name)
  }, [name])
}

function Welcome({name, count}) {
  const [text, setText] = useState(1);
  const [text2, setText2] = useState(1);
  useEffect(() => {
    setText(5);
  }, [])

  useWatchName(name)

  useEffect(() => {
    console.log('count', count)
  }, [count])

  const renderName = () => {
    return name + '!';
  }
  return <Text>Hello, {text} {renderName()}</Text>;
}

class Welcome2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      isLoading: true,
      isRefreshing: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2000)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.setState({name: this.props.name})
    }
  }

  componentWillUnmount() {
  }

  renderName() {
    return this.state.name + '!';
  }

  render() {
    const {isLoading} = this.state;
    console.log('render')
    return <View>
      {isLoading ? (<ActivityIndicator/>) : <Text>Hello, {this.renderName()}</Text>}
    </View>;
  }
}

export default function App() {
  // const [text, setText] = useState('test');
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setText('test 3')
  //     setTimeout(() => {
  //       setCount(prevState => prevState + 1)
  //     }, 1000)
  //   }, 3000)
  // }, [])
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/*<Welcome name={text} count={count}/>*/}
      {/*<Welcome2 name={text} />*/}
      {/*<Counter/>*/}
      {/*<News/>*/}
      {/*<CounterTest/>*/}
      <Input/>
      <StatusBar style="auto" />
    </View>
  );
}
