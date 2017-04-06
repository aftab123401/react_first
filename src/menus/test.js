 render() {
        let {data} = this.state;
        console.log(data);
        let renderUsername = () => {
            return data.map((item, key) => {
                return <div key={key}>{item.username}</div>
            });
        }
        return (
            <div>
                {renderUsername()}
            </div>
        );
    }