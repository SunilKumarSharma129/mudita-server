const tf = require("@tensorflow/tfjs-node");

class L2 {
  static className = "L2";

  constructor(config) {
    return tf.regularizers.l1l2(config);
  }
}
tf.serialization.registerClass(L2);

const predictData = async (req, res) => {
  try {
    const model = await tf.loadLayersModel(
      `file://${process.cwd()}/model/model.json`
    );
    const inputData = req.body.inputData;
    const input = tf.tensor2d([inputData], [1, 38]);
    const tensor = model.predict(input);
    res.status(200).send({ prediction: tensor.dataSync()[0] });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  predictData,
};
