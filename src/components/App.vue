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
									p My experience is still little on the Web Development industry but I learn all of this stuff by reading, watching, researching and experimenting.
									
					v-flex(xs12 sm6, :class="[drawer ? 'md4 lg3' : 'md3 lg2']" v-for="fw in frameworks", :key="fw.name").mb-4
						v-card(hover style="min-height: 300px;" height="100%", :img="fw.logo")
							v-card-column.h-100.white--text(style="background: linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.8))")
								v-progress-linear(:value="fw.progress", :height="30").ma-0
								v-card-title {{fw.name}}
								v-card-text.display-1.text-xs-center {{fw.progress}}%
								v-card-text
									p {{fw.experience}}
			v-container#projects
				.display-3.text-xs-center.py-5 Projects
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
				}
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
			return parseInt(this.frameworks.reduce((t,v) => t += v.progress,0) / this.frameworks.length)
		}
	},
	methods: {
		scroll() {
			let el = this.$refs.mainBackground;

			this.scrolled = window.pageYOffset > el.clientHeight - 64;
		},
	},
	created() {
		window.addEventListener('scroll', this.scroll);
		this.frameworkTimer = setInterval(() => this.frameworkIndex = ++this.frameworkIndex >= this.frameworks.length ? 0 : this.frameworkIndex,this.interval);
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
