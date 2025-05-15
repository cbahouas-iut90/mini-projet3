const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, content } = req.body;

    const message = await Message.create({
      sender: req.user._id,
      receiver: receiverId,
      content
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'envoi du message', error });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { userId } = req.params;

    const messages = await Message.find({
      $or: [
        { sender: req.user._id, receiver: userId },
        { sender: userId, receiver: req.user._id }
      ]
    }).sort({ timestamp: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des messages', error });
  }
};
