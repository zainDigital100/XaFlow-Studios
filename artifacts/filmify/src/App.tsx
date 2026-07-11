import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/home';
import ServicesPage from '@/pages/services';
import ProcessPage from '@/pages/process';
import WorkPage from '@/pages/work';
import PricingPage from '@/pages/pricing';
import ContactPage from '@/pages/contact';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/process" component={ProcessPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/contact" component={ContactPage} />
          <Route>
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
              404 - Not Found
            </div>
          </Route>
        </Switch>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
