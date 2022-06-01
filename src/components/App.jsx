import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styled/GlobalStyle';
import theme from '../styled/theme';
import TasksForm from './TasksForm';
import PageContainer from '../styled/PageContainer';
import TodoItems from './TodoItems';
import TasksProvider from './context/TasksContext';
import Header from './Header';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageContainer>
          <TasksProvider>
            <Header />
            <TasksForm />
            <TodoItems />
          </TasksProvider>
        </PageContainer>
      </ThemeProvider>
    </>
  );
}
