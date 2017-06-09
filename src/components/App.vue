<template lang="pug">
	v-app
		v-navigation-drawer(persistent v-model="drawer", :mini-variant.sync="mini" , :class="[mini && !scrolled ? 'transparent' : '']")
			v-list(light)
				v-list-item
					v-list-tile(avatar)
						v-list-tile-avatar
							img(:src="profileImage")
						v-list-tile-content
							v-list-tile-title Look At Me
						v-list-tile-action
							v-btn(icon light @click.native.stop="mini = !mini")
								v-icon chevron_left
				v-divider(light)
			v-list
				v-list-item
					v-list-tile
						v-list-tile-avatar
							img(src="http://www.freeiconspng.com/uploads/human-brain-icon-green-0.png")
		v-toolbar(fixed, :class="[scrolled ? '' : 'transparent elevation-0']" light)
			v-slide-x-transition
				v-toolbar-side-icon(light @click.native.stop="drawer = !drawer" v-if="scrolled")
			v-toolbar-title Ralph Christian D. Eclipse
		main.pt-0
			v-container(fluid, :style="[mainBackground]" ref="mainBackground").ma-0.primary
				v-layout(row wrap).vh-100-min.m-a
					.m-a.white--text.text-xs-center
						.display-4 Ralph Eclipse is
						.display-1 Using
						v-container(fluid)
							transition(enterActiveClass="animated bounceInLeft" leaveActiveClass="animated bounceOutRight" mode="out-in")
								v-layout(column wrap align-center, :key="framework.name")
									img(:src="framework.logo" style="width: 100px; height: 100px;")
									.text-xs-center.display-1.pt-3 {{framework.name}}
			v-container#knowledge(fluid).accent
				.display-3.text-xs-center.py-5.white--text Knowledge On
				v-divider(light)
				v-layout(row wrap)
					v-flex(xs12 sm6, :class="[drawer ? 'md4 lg3' : 'md3 lg2']").mb-4
						v-card(hover style="min-height: 300px;" height="100%", :img="profileImage")
							v-card-column.h-100.white--text(style="background: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.8))")
								v-progress-linear(:value="knowledge", :height="30").ma-0
								v-card-title Current Experience
								v-card-text.display-1.text-xs-center {{knowledge}}%
								v-card-text
									p I'm developing websites for only {{days}} days so I'm still young in the industry but willing to learn new technologies based on the client's preference
									
					v-flex(xs12 sm6, :class="[drawer ? 'md4 lg3' : 'md3 lg2']" v-for="fw in frameworks", :key="fw.name").mb-4
						a(:href="fw.link" style="text-decoration: none", target="_blank"): v-card(hover style="min-height: 300px;" height="100%", :img="fw.logo")
							v-card-column.text-xs-center.h-100.white--text(style="background: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.8))")
								v-progress-linear(:value="fw.progress", :height="30" info).ma-0
								v-card-title {{fw.name}}
								v-card-text.display-1.text-xs-center {{fw.progress}}%
								v-card-text
									p {{fw.experience}}
			v-container#projects(fluid style="background: linear-gradient(180deg,#172A3A,#FFFFFF)")
				.display-3.text-xs-center.py-5.white--text Projects
				v-layout(row wrap)
					v-flex(xs12 sm6, :class="[drawer ? 'md4 lg3' : 'md3 lg2']" v-for="project in projects", :key="project.name").mb-4
						a(:href="project.link" style="text-decoration: none", target="_blank"): v-card(hover style="min-height: 300px;" height="100%", :img="project.image")
							v-card-column.text-xs-center.h-100.white--text(style="background: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.8))")
								v-card-title {{project.name}}
								v-card-text
									p {{project.description}}
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			scrolled: false,
			drawer: false,
			hovered: false,
			mini: false,
			profileImage: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.0-9/11796216_1175820312443445_6278156916354891556_n.jpg?oh=3ef62d82fa5a8c2a623ac15b994a0847&oe=59E75C57",
			mainBackground: {
				background: `
					url('https://aestheticio.com/wp-content/uploads/2015/05/bp_background_2_blue1.jpg')
				 	center center / cover no-repeat fixed
				`
			},
			routes: [
				{
					name: '#'
				}
			],
			projects: [
				{
					image: 'https://wats-18487.firebaseapp.com/images/logo.png',
					name: 'WATS',
					link: 'https://wats-18487.firebaseapp.com/',
					description: 'This site was created to manage schools schedules, users, courses and other school related stuff based on admins, teachers and students of the school'
				},
				{
					image: 'https://prod-uplant-68cfe.firebaseapp.com/images/logo.png',
					name: 'UPlant CMS',
					link: '#',
					description: 'The second freelance project using the same web technologies like Vue JS and Firebase and Material Design Spec'
				},
				{
					image: 'https://prod-radioone.firebaseapp.com/images/logo.png',
					name: 'Radio One CMS',
					link: '#',
					description: 'My first freelance project using Firebase and Vue JS. The site was to manage the radio products for the iOS Apps, it also includes a chat system for communicating with the users.' 
				},
				{
					image: 'http://pos.dsoftbd.com/wp-content/uploads/2014/07/b-slide11.jpg?id=558',
					name: 'JJETS',
					link: 'https://jjets-1e39b.firebaseapp.com/',
					description: 'First project using in our SAD subject and the first time i used Vue JS and Firebase. The purpose of the website is to manage multiple stores by managers which they can hire employees that handles the POS and customers will buy using the online stores.'
				},
				{
					image: 'http://go.figleaf.com/hs-fs/hub/208094/file-248557413-png/Drupal/drupal.png',
					name: 'Drupal 7 Ticketing or Issue Tracking Website',
					link: '#',
					description: 'My first time on developing websites on PHP where we create a ticketing system for 24SevenJobs Company, The purpose is to track issues by the user'
				},
				{
					image: 'http://www.lacartes.com/images/business/42947/130390/m/302992.jpg',
					name: 'PowerediOX Daily Sales System',
					link: '#',
					description: 'Using C#, this is our first company project where we create a daily checking of agent sales or stocks the agent will record it and can view and edit the stocks by tables.'
				},
				{
					image: 'https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.0-9/12208527_1235615123130630_1184930797479690871_n.jpg?oh=ef55621830bd87a5a62c416151b63161&oe=59AB8BE2',
					name: 'Automatic LAN Examination System',
					link: '#',
					description: 'This is my first project that is created on the old VB6 language its purpose is to create lan based examinations and record their scores based on the course and the subject.'
				},
			],
			frameworks: [
				{
					logo: 'https://vuejs.org/images/logo.png',
					name: 'Vue JS',
					link: 'https://vuejs.org/',
					progress: 95,
					experience: 'I always make projects using this great view layer framework which is absolutely easy and adaptable'
				},
				{
					logo: 'http://assets.stickpng.com/thumbs/5847f40ecef1014c0b5e488a.png',
					name: 'Firebase',
					link: 'https://firebase.google.com/',
					progress: 95,
					experience: 'Using this BaaS helps me understand how websockets and realtime database and other kinds of serverless web technologies'
				},
				{
					logo: 'https://iprodev.com/wp-content/uploads/nodejs.png',
					name: 'Node JS',
					link: 'https://nodejs.org/en/',
					progress: 70,
					experience: 'I use Node JS for alot of things from creating a Simple WebSocket Server using Socket.io and REST API using Express JS'
				},
				{
					logo: 'https://www.graphqlhub.com/images/graphqlhub-logo.png',
					name: 'Graph QL',
					link: 'http://graphql.org/',
					progress: 80,
					experience: 'This one is also great which replaces the traditional REST Architecture, I am using this on our capstone project.'
				},
				{
					logo: 'https://www.pubnub.com/wp-content/uploads/2014/07/SOCKETIOICON.gif',
					name: 'Socket IO',
					link: 'socket.io',
					progress: 85,
					experience: 'Im fond of using websockets for creating realtime apps I really want the user to be updated on what is happening so I used this on some small projects'
				},
				{
					logo: 'http://mean.io/wp-content/themes/twentysixteen-child/images/express.png',
					name: 'Express JS',
					link: 'https://expressjs.com/',
					progress: 85,
					experience: 'This is great for creating REST API or creating a Web App usually I use this in pair of socket io, graphql and mongo db'
				},
				{
					logo: 'https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png',
					name: 'Mongo DB',
					link: 'https://www.mongodb.com/',
					progress: 85,
					experience: 'A Great NO SQL database which is mostly used by developers I also use this with some small fun projects'
				},
			],
			frameworkIndex: 0,
			frameworkTimer: null,
			interval: 5000
		}
	},
	computed: {
		framework() {
			return this.frameworks[this.frameworkIndex];
		},
		knowledge() {
			return parseInt(this.frameworks.reduce((t, v) => t += v.progress, 0) / this.frameworks.length)
		},
		days() {
			let dt1 = new Date('12/4/2016');
			let dt2 = new Date();
			return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));

		},
	},
	methods: {
		scroll() {
			let el = this.$refs.mainBackground;

			this.scrolled = window.pageYOffset > el.clientHeight - 64;
			this.drawer = this.drawer && this.scrolled;

		},
	},
	created() {
		window.addEventListener('scroll', this.scroll);
		this.frameworkTimer = setInterval(() => this.frameworkIndex = ++this.frameworkIndex >= this.frameworks.length ? 0 : this.frameworkIndex, this.interval);
	},
	destroyed() {
		clearInterval(this.frameworkTimer);
		window.removeEventListener('scroll', this.scroll);
	}
}
</script>

<style lang="stylus">

	@import './app.styl';

</style>
