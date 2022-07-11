import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useFonts } from 'expo-font';

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    Lalezar: require('./assets/Lalezar.ttf'),
  });
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {fontsLoaded && <TabNavigation />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
