from flask import Flask, request, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def projetos():
    return render_template('projetos.html')

@app.route('/executar', methods=['POST'])
def executar():
    caminho = request.form['caminho']
        
    try:
        # Executa o caminho no CMD
        resultado = subprocess.check_output(caminho, shell=True, stderr=subprocess.STDOUT, text=True)
        
    except subprocess.CalledProcessError as e:
        resultado = f"Erro: {e.output}"
        
        return render_template('projetos.html', resultado=resultado)

if __name__ == '_main_':
    app.run(debug=True)