import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MobileNavbar, Navbar, Sidebar } from './components'
import {
	Channel,
	History,
	Home,
	Library,
	LikedVideos,
	NotFound,
	SearchResults,
	Subscriptions,
	Trending,
	WatchVideo,
	YourVideos
} from './pages'

import { Container } from './styled'

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<MobileNavbar />
			<Container>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/watch/:videoId" component={WatchVideo} />
					<Route path="/channel/:channelId" component={Channel} />
					<Route
						path="/results/:searchQuery"
						component={SearchResults}
					/>
					<Route path="/feed/trending" component={Trending} />
					<Route
						path="/feed/subscriptions"
						component={Subscriptions}
					/>
					<Route path="/feed/library" component={Library} />
					<Route path="/feed/history" component={History} />
					<Route path="/feed/my-videos" component={YourVideos} />
					<Route path="/feed/liked-videos" component={LikedVideos} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Container>
		</>
	)
}

export default App
