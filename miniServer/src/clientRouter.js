module.exports = {
    async indexPage(req, res){
        return res.sendFile(path.join(__dirname, '/../clientpublic/index.html'));
    }
}