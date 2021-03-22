import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ReactDndPage } from './pages/ReactDnd'
import { route } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        {[{ path: route.reactDnd, component: ReactDndPage }].map(
          ({ path, component }, i) => (
            <Route exact key={i} component={component} path={path} />
          )
        )}
      </Switch>
    </BrowserRouter>
  )
}
