function isPositive(a) {
    try {
        if (a > 0) {
            return "YES";
        }
        if (a < 0) {
            throw "Negative Error";
        } else if (a == 0) {
            throw "Zero Error";
        }
    } catch (err) {
        return (err);
    }
}
