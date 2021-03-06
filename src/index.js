import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { auth } from './firebase/config'

let app

auth.onAuthStateChanged((_user) => {
	if (!app) {
		app = ReactDOM.render(
			<React.StrictMode>
				<Provider store={store}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</Provider>
			</React.StrictMode>,
			document.getElementById('root'),
		)
	}
})
