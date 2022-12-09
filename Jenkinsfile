pipeline {
	agent any 
	tools {nodejs "nodejs"}
	
	stages{
		stage('test'){
			steps{
				sh 'npm install'
			}
		}
		stage('Clone repository') {
			steps {
				script {
					git 'https://github.com/forOSS-report/binaryToDecimal.git'
				}
			}
		}
		stage('Build image') {
			steps {
				script {
					app = docker.build("chaeyes/foross")
				}
			}
		}
		stage('Push image') {
			steps {
				script {
					docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
						app.push("${env.BUILD_NUMBER}")
						app.push("latest")
					}
				}
			}
		}
	}
}

