pipeline {
	agent any 
	tools {14.21.1-LTS "node"}
	
	stages{
		stage('test'){
			steps{
				sh 'npm install'
			}
		}
	}
}

	
// 	stage('Clone repository') {
// 		git 'https://github.com/forOSS-report/binaryToDecimal.git'
// 	}
// 	stage('Build image') {
// 		app = docker.build("chaeyes/foross")
// 	}
// 	stage('Test image') {
// 			sh 'npm install'
		
// 	}
// 	stage('Push image') {
// 		docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
// 			app.push("${env.BUILD_NUMBER}")
// 			app.push("latest")
// 		}
// 	}
// }
